let workingTotal = 0;
let num1;
let num2;
let operator;

const display = document.querySelector('.display p');
let displayText;
const updateDisplay = function(number) {
    displayText = display.textContent;
    display.textContent = `${displayText}${number}`;
    return displayText = display.textContent;
};

const add = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            return "Please enter a valid number.";
        } else {
            workingTotal += Number.parseInt(arguments[i]);
        }
    }
    return workingTotal;
};

const quickAdd = function(number) {
    workingTotal = workingTotal + number;
    return workingTotal;
};

const subtract = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (i == 0 && workingTotal == 0) {
            workingTotal += arguments[i];
        } else {
            if (isNaN(arguments[i])) {
                return "Please enter a valid number.";
            } else {
                workingTotal -= Number.parseInt(arguments[i]);
            }
        }
    }
    return workingTotal;
};

const quickSubtract = function(number) {
    workingTotal = workingTotal - number;
    return workingTotal;
};

const multiply = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (workingTotal == 0) {
            workingTotal += 1;
        }
        if (isNaN(arguments[i])) {
            return "Please enter a valid number.";
        } else {
            workingTotal *= Number.parseInt(arguments[i]);
        }
    }
    return workingTotal;
};

const quickMultiply = function(number) {
    workingTotal = workingTotal * number;
    return workingTotal;
};

const divide = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (workingTotal == 0) {
            return 0;
        }
        if (isNaN(arguments[i])) {
            return "Please enter a valid number.";
        } else {
            workingTotal /= Number.parseInt(arguments[i]);
        }
    }
    return workingTotal;
};

const quickDivide = function(number) {
    workingTotal = workingTotal / number;
    return workingTotal;
};

const operate = function(operator, num1, num2) {
    switch(operator) {
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
        default:
            return "Something went wrong";
    }
    displayText = workingTotal;
    return workingTotal;
};

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const button0 = document.getElementById('0');
const buttonAdd = document.getElementById('add');
const buttonSubtract = document.getElementById('subtract');
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonEquals = document.getElementById('equals');
const buttonClear = document.getElementById('clear');

button1.addEventListener('click', function() {
    updateDisplay(1);
});
button2.addEventListener('click', function() {
    updateDisplay(2);
});
button3.addEventListener('click', function() {
    updateDisplay(3);
});
button4.addEventListener('click', function() {
    updateDisplay(4);
});
button5.addEventListener('click', function() {
    updateDisplay(5);
});
button6.addEventListener('click', function() {
    updateDisplay(6);
});
button7.addEventListener('click', function() {
    updateDisplay(7);
});
button8.addEventListener('click', function() {
    updateDisplay(8);
});
button9.addEventListener('click', function() {
    updateDisplay(9);
});
button0.addEventListener('click', function() {
    updateDisplay(0);
});

buttonAdd.addEventListener('click', function(){
    if (displayText == '') {
        return display.textContent = "Please enter a valid number first.";
    }
    num1 = displayText;
    displayText = 0;
    operator = 'add';
    display.textContent = '';
});
buttonSubtract.addEventListener('click', function(){
    if (displayText == '') {
        return display.textContent = "Please enter a valid number first.";
    }
    num1 = displayText;
    operator = 'subtract';
    display.textContent = '';
});
buttonMultiply.addEventListener('click', function(){
    if (displayText == '') {
        return display.textContent = "Please enter a valid number first.";
    }
    num1 = displayText;
    operator = 'multiply';
    display.textContent = '';
});
buttonDivide.addEventListener('click', function(){
    if (displayText == '') {
        return display.textContent = "Please enter a valid number first.";
    }
    num1 = displayText;
    operator = 'divide';
    display.textContent = '';
});

buttonEquals.addEventListener('click', function() {
    if (displayText == undefined) {
        display.textContent = "Please enter a number first.";
        return;
    }
    if (workingTotal == 0) {
        num2 = displayText;
        operate(operator, num1, num2);
        display.textContent = workingTotal;
    } else {
        num1 = workingTotal;
        num2 = displayText;
        operate(operator, num1, num2);
        display.textContent = workingTotal;
    }
    
});

buttonClear.addEventListener('click', function() {
    displayText = '';
    display.textContent = '';
    num1 = 0;
    num2 = 0;
    workingTotal = 0;
});
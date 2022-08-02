let workingTotal = 0;

const add = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            return "Please enter a valid number.";
        } else {
            workingTotal += arguments[i];
        }
    }
    return workingTotal;
};

const quickAdd = function(number) {
    workingTotal = workingTotal + number;
    return workingTotal;
}

const subtract = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (i == 0 && workingTotal == 0) {
            workingTotal += arguments[i];
        } else {
            if (isNaN(arguments[i])) {
                return "Please enter a valid number.";
            } else {
                workingTotal -= arguments[i];
            }
        }
    }
    return workingTotal;
};

const quickSubtract = function(number) {
    workingTotal = workingTotal - number;
    return workingTotal;
}

const multiply = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (workingTotal == 0) {
            workingTotal += 1;
        }
        if (isNaN(arguments[i])) {
            return "Please enter a valid number.";
        } else {
            workingTotal *= arguments[i];
        }
    }
    return workingTotal;
};

const quickMultiply = function(number) {
    workingTotal = workingTotal * number;
    return workingTotal;
}

const divide = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (workingTotal == 0) {
            return 0;
        }
        if (isNaN(arguments[i])) {
            return "Please enter a valid number.";
        } else {
            workingTotal /= arguments[i];
        }
    }
    return workingTotal;
};

const quickDivide = function(number) {
    workingTotal = workingTotal / number;
    return workingTotal;
}

const operate = function(operator, num1, num2) {
    workingTotal = 0;
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
    return workingTotal;
}
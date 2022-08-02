let answer = 0;

const add = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            return "Please enter a valid number.";
        } else {
            answer += arguments[i];
        }
    }
    return answer;
};

const subtract = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (i == 0 && answer == 0) {
            answer += arguments[i];
        } else {
            if (isNaN(arguments[i])) {
                return "Please enter a valid number.";
            } else {
                answer -= arguments[i];
            }
        }
    }
    return answer;
};

const multiply = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (answer == 0) {
            answer += 1;
        }
        if (isNaN(arguments[i])) {
            return "Please enter a valid number.";
        } else {
            answer *= arguments[i];
        }
    }
    return answer;
};
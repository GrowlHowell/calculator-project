const add = function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            return "Please enter a valid number.";
        } else {
            sum += arguments[i];
        }
    }
    return sum;
};

function multiply(num1, num2) {

    return(num1*num2);
}

function add(num1, num2) {

    return(num1+num2);
}
function subtract(num1, num2) {

    return(num1-num2);
}
function divide(num1, num2) {

    return(num1/num2);
}

/* main funcction that calls the operator functions depending on what operator is requested */

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

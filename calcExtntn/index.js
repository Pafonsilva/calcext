const display = document.getElementById("display");
const numberButton = document.querySelectorAll("numberButton")

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};


document.addEventListener("DOMContentLoaded", function () {

    const numberButtons = document.querySelectorAll(".numberButton");
    const display = document.getElementById("display");
    const actionButtons = document.querySelectorAll('.actionButton');

    let x = null;
    let operator = null;

    numberButtons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonValue = button.value;
            display.value += buttonValue;
        });
    });

    actionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonValue = button.value;

            if (buttonValue === "+" || buttonValue === "-" || buttonValue === "x" || buttonValue === "÷") {
                if (x === null) {
                    x = parseFloat(display.value);
                    operator = buttonValue;
                    display.value = "";
                }
            } else if (buttonValue === "C") {
                x = null;
                operator = null;
                display.value = "";
            } else if (buttonValue === "=") {

                if (x !== null && operator !== null) {
                    const y = parseFloat(display.value);
                    let result;

                    if (operator === "+") {
                        result = add(x, y);
                    } else if (operator === "-") {
                        result = subtract(x, y);
                    } else if (operator === "x") {
                        result = multiply(x, y);
                    } else if (operator === "÷") {
                        result = divide(x, y);
                    }

                    display.value = result;
                    x = null;
                    operator = null;
                    y = null;
                }
            }
        });
    });
});
function calculate() {
    const first = prompt("Enter first number:");
    const operator = prompt("Enter operator (+, -, *, /):");
    const second = prompt("Enter second number:");

    if (isNaN(Number(first)) || isNaN(Number(second))) {
        console.log("Error: Invalid number input!");
        return;
    }

    switch (operator) {
        case "+":
            console.log(Number(first) + Number(second));
            break;
        case "-":
            console.log(Number(first) - Number(second));
            break;
        case "*":
            console.log(Number(first) * Number(second));
            break;
        case "/":
            if (Number(second) === 0) {
                console.log("Error: Cannot divide by zero!");
            } else {
                console.log(Number(first) / Number(second));
            }
            break;
        default:
            console.log("Error: Invalid operator!");
    }
}

calculate();

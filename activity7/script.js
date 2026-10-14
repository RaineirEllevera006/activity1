function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        return; // Exit the function if inputs are not valid numbers
    }
    
    const sum = num1 + num2;
    const diff = num1 - num2;
    const prod = num1 * num2;
    const quot = num1 / num2;
    const rema = num1 % num2;
    document.getElementById("sum").innerHTML = "The sum is: " + sum;
    document.getElementById("diff").innerHTML = "The difference is: " + diff;
    document.getElementById("prod").innerHTML = "The product is: " + prod;
    document.getElementById("quot").innerHTML = "The quotient is: " + quot;
    document.getElementById("rema").innerHTML = "The remainder is: " + rema;
    }

    function clearFields() {
    document.getElementById("sum").innerHTML = "";
    document.getElementById("diff").innerHTML = "";
    document.getElementById("prod").innerHTML = "";
    document.getElementById("quot").innerHTML = "";
    document.getElementById("rema").innerHTML = "";
    }
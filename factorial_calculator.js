let calculateButton = document.getElementById("CalculateButton");
let input = document.getElementById("InputNumberBox");
let answerElement = document.getElementById("factorialAnswer")
let n_HTMLElement = document.getElementById("n")


function factorialIterative(n) {




    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}



function calculateAndDisplayFactorial(){

n = input.value.trim();

if (n === "") {
    alert("Please enter a value for n.");
    return false;
}

if (!Number.isInteger(parseFloat(n))) {
    alert("Enter an integer.");
    return false;
}


n_HTMLElement.innerHTML = n + "&nbsp";
answer = factorialIterative(n)
answerElement.innerHTML = answer;

}



calculateButton.addEventListener("click", calculateAndDisplayFactorial)

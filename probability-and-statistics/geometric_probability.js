let p = document.getElementById("p")
let x = document.getElementById("x")
let p_lti = document.getElementById("p_lti_answer")
let p_e = document.getElementById("p_e_answer")
let calculateButton = document.getElementById("calculateButton")

//Formula for P(X ≤ x)
//1 - (1-p)^x
//1 - (inside)

function check_proper_inputs() {

    let pValue = parseFloat(p.value);
    let xValue = parseInt(x.value);

    //alert("pValue is" + pValue)

    if (isNaN(pValue)) {

        alert("Enter a number between 0 and 1 for p.")
        return false;

    }


    if (pValue < 0 || pValue > 1) {
        alert("p must be between 0 and 1.")
        return false;
    }

    if (Number.isInteger(xValue) != true) {

    alert("x needs to be an integer.")
    return false;
    }

    else return true;


}


function get_p_less_than_including() {

if(!check_proper_inputs()) {

    return;
}

let pValue = p.value;
let xValue = x.value;

var probability_less_than_including = 1 - (Math.pow((1 - pValue), xValue));
p_lti.innerHTML = probability_less_than_including.toFixed(4);

}

function get_p_equals() {

let pValue = p.value;
let xValue = x.value;
var probability_equals = Math.pow((1-pValue), xValue -1) * (pValue)
p_e.innerHTML = probability_equals.toFixed(4);



}//get_p_equals



function get_answers() {

if(!check_proper_inputs()) {

        return;
    }

get_p_less_than_including()
get_p_equals()

}


calculateButton.addEventListener("click", get_answers)
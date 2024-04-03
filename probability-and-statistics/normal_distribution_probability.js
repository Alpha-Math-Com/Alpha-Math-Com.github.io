//Entirely from GPT


// Function to calculate the normal probability density function
function normalpdf(x, mean, stddev) {
    var exponent = Math.exp(-0.5 * Math.pow((x - mean) / stddev, 2));
    return (1 / (stddev * Math.sqrt(2 * Math.PI))) * exponent;
}

// Function to read values from the HTML elements and calculate the normalpdf
function calculateNormalPDF() {
    // Read values from the HTML elements
    var x = parseFloat(document.getElementById('x').value);
    var sd = parseFloat(document.getElementById('sd').value);
    var mu = parseFloat(document.getElementById('mu').value);

    // Validate input values
    if (isNaN(x) || isNaN(sd) || isNaN(mu)) {
        alert("Please enter valid numbers for x, sd, and mu.");
        return;
    }

    if (sd <= 0) {
        alert("Standard deviation must be greater than 0.");
        return;
    }

    // Calculate the normalpdf
    var result = normalpdf(x, mu, sd);

    // Display the result
    document.getElementById('result').innerHTML = result.toFixed(4); // Adjust the number of decimal places as needed
}

// Optional: Attach the calculateNormalPDF function to an event listener if you have a button to trigger the calculation
document.getElementById('calculateButton').addEventListener('click', calculateNormalPDF);

// Function to append results neatly into the webpage
function printResult(content) {
    document.getElementById("output").innerHTML += "<div class='result-box'>" + content + "</div><hr>";
}

// -------------------------------------------------------------
// Question 1: Positive Integer Operations
// -------------------------------------------------------------
var numPositiveInput = prompt("1. Enter a positive floating point number (e.g., 3.45214):");
var numPositive = parseFloat(numPositiveInput);

if (!isNaN(numPositive) && numPositive > 0) {
    printResult(
        "<strong>number:</strong> " + numPositive + "<br>" +
        "<strong>round off value:</strong> " + Math.round(numPositive) + "<br>" +
        "<strong>floor value:</strong> " + Math.floor(numPositive) + "<br>" +
        "<strong>ceil value:</strong> " + Math.ceil(numPositive)
    );
} else {
    printResult("<em>Question 1: Invalid positive number entered.</em>");
}

// -------------------------------------------------------------
// Question 2: Negative Floating Point Operations
// -------------------------------------------------------------
var numNegativeInput = prompt("2. Enter a negative floating point number (e.g., -2.673):");
var numNegative = parseFloat(numNegativeInput);

if (!isNaN(numNegative) && numNegative < 0) {
    printResult(
        "<strong>number:</strong> " + numNegative + "<br>" +
        "<strong>round off value:</strong> " + Math.round(numNegative) + "<br>" +
        "<strong>floor value:</strong> " + Math.floor(numNegative) + "<br>" +
        "<strong>ceil value:</strong> " + Math.ceil(numNegative)
    );
} else {
    printResult("<em>Question 2: Invalid negative number entered.</em>");
}

// -------------------------------------------------------------
// Question 3: Absolute Value
// -------------------------------------------------------------
var absoluteInput = prompt("3. Enter any number to display its absolute value:");
var numAbsolute = Number(absoluteInput);

if (!isNaN(numAbsolute)) {
    printResult("The absolute value of " + numAbsolute + " is " + Math.abs(numAbsolute));
} else {
    printResult("<em>Question 3: Invalid number entered.</em>");
}

// -------------------------------------------------------------
// Question 4: Dice Simulation
// -------------------------------------------------------------
var diceValue = Math.floor(Math.random() * 6) + 1;
printResult("random dice value: " + diceValue);

// -------------------------------------------------------------
// Question 5: Coin Toss Simulation
// -------------------------------------------------------------
var coinValue = Math.floor(Math.random() * 2) + 1;
var coinText = (coinValue === 2) ? "Heads" : "Tails";

printResult(coinValue + "<br>random coin value: " + coinText);

// -------------------------------------------------------------
// Question 6: Random Number Between 1 and 100
// -------------------------------------------------------------
var randomNumber = Math.floor(Math.random() * 100) + 1;
printResult("random number between 1 and 100: " + randomNumber);

// -------------------------------------------------------------
// Question 7: User Weight Parsing
// -------------------------------------------------------------
var weightInput = prompt("7. Enter your weight in kilograms (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
var parsedWeight = parseFloat(weightInput);

if (!isNaN(parsedWeight)) {
    printResult("The weight of user is " + parsedWeight + " kilograms");
} else {
    printResult("<em>Question 7: Could not parse a valid weight.</em>");
}

// -------------------------------------------------------------
// Question 8: Secret Game (1 to 10)
// -------------------------------------------------------------
var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("8. Enter a number between 1 and 10:"));

if (userGuess === secretNum) {
    alert("Congratulations! You guessed the secret number.");
    printResult("<strong>Secret Number Game:</strong> Congratulations! You guessed the secret number (" + secretNum + ").");
} else {
    alert("Try again! The secret number was " + secretNum);
    printResult("<strong>Secret Number Game:</strong> Try again! You guessed " + userGuess + ", but the secret number was " + secretNum + ".");
}
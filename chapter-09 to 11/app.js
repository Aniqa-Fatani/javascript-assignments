// ==========================================
// CHAPTERS 9-11: USER INPUT & CONDITIONAL STATEMENT
// ==========================================

// --- Question 1 ---
var city = prompt("Enter city name:");
if (city && city.toLowerCase() === "karachi") {
    document.write("Welcome to city of lights<br><br>");
} else if (city) {
    document.write("Welcome to " + city + "<br><br>");
}

// --- Question 2 ---
var gender = prompt("Enter your gender (male/female):");
if (gender && gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender && gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}

// --- Question 3 ---
var signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");
if (signalColor) {
    signalColor = signalColor.toLowerCase();
    if (signalColor === "red") {
        document.write("Red : Must Stop<br>");
    } else if (signalColor === "yellow") {
        document.write("Yellow : Ready to move<br>");
    } else if (signalColor === "green") {
        document.write("Green : Move now<br>");
    }
}
document.write("<br>");

// --- Question 4 ---
var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// --- Question 5 ---
// Output checking script
// a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true"); // DISPLAYED
}

// b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true"); // NOT DISPLAYED
}

// c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true"); // NOT DISPLAYED
}
if (c === 13) {
    alert("condition 2 is true"); // DISPLAYED
}
if (++c < 14) {
    alert("condition 3 is true"); // NOT DISPLAYED
}
if (c === 14) {
    alert("condition 4 is true"); // DISPLAYED
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals"); // DISPLAYED
}

// e.
if (true) {
    alert("True"); // DISPLAYED
}
if (false) {
    alert("False"); // NOT DISPLAYED
}

// f.
if ("car" < "cat") {
    alert("car is smaller than cat"); // DISPLAYED
}

// --- Question 6 ---
document.write("<h1>Marks Sheet</h1>");
var sub1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
var sub2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
var sub3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));
var totalMarksInput = parseFloat(prompt("Enter total marks:", "300"));

var totalObtained = sub1Marks + sub2Marks + sub3Marks;
var percentage = (totalObtained / totalMarksInput) * 100;
var grade = "";
var remarks = "";

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("Total marks : " + totalMarksInput + "<br>");
document.write("Marks obtained : " + totalObtained + "<br>");
document.write("Percentage : " + percentage.toFixed(0) + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br><br>");

// --- Question 7 ---
var secretNum = 6; // Secret number between 1 and 10
var userGuess = parseInt(prompt("Guess the secret number (1 to 10):"));

if (userGuess === secretNum) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNum || userGuess - 1 === secretNum) {
    alert("Close enough to the correct answer");
}

// --- Question 8 ---
var numCheck = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
if (numCheck % 3 === 0) {
    alert("The number " + numCheck + " is divisible by 3.");
}

// --- Question 9 ---
var evenOddNum = parseInt(prompt("Enter a number to check if it's even or odd:"));
if (evenOddNum % 2 === 0) {
    alert(evenOddNum + " is an Even number.");
} else {
    alert(evenOddNum + " is an Odd number.");
}

// --- Question 10 ---
var temp = parseFloat(prompt("Enter today's temperature:"));
if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today's Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
}

// --- Question 11 ---
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");
var calcResult;

if (operation === "+") {
    calcResult = num1 + num2;
} else if (operation === "-") {
    calcResult = num1 - num2;
} else if (operation === "*") {
    calcResult = num1 * num2;
} else if (operation === "/") {
    calcResult = num1 / num2;
} else if (operation === "%") {
    calcResult = num1 % num2;
} else {
    calcResult = "Invalid Operation";
}

alert("Result: " + calcResult);
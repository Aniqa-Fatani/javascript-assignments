// ==========================================
// CHAPTERS 12-13: IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS
// ==========================================

// --- Question 1 ---
// Check whether given input is a number, uppercase letter, or lowercase letter using ASCII codes
var inputChar = prompt("Enter a character (number or letter):");

if (inputChar) {
    var ascii = inputChar.charCodeAt(0);

    if (ascii >= 48 && ascii <= 57) {
        alert("The input is a Number.");
    } else if (ascii >= 65 && ascii <= 90) {
        alert("The input is an Uppercase Letter.");
    } else if (ascii >= 97 && ascii <= 122) {
        alert("The input is a Lowercase Letter.");
    } else {
        alert("The input is a special character or symbol.");
    }
}

// --- Question 2 ---
// Accept two integers and display the larger, or show if they are equal
var num1 = parseInt(prompt("Enter the first integer:"), 10);
var num2 = parseInt(prompt("Enter the second integer:"), 10);

if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > num2) {
        alert(num1 + " is larger than " + num2);
    } else if (num2 > num1) {
        alert(num2 + " is larger than " + num1);
    } else {
        alert("Both integers are equal.");
    }
}

// --- Question 3 ---
// Check whether input number is positive, negative, or zero
var checkNum = parseFloat(prompt("Enter a number:"));

if (!isNaN(checkNum)) {
    if (checkNum > 0) {
        alert("The number is Positive.");
    } else if (checkNum < 0) {
        alert("The number is Negative.");
    } else {
        alert("The number is Zero.");
    }
}

// --- Question 4 ---
// Check if character is a vowel (returns true or false)
var charInput = prompt("Enter a single character:");

if (charInput && charInput.length === 1) {
    var lowerChar = charInput.toLowerCase();
    var isVowel = (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u');
    alert("Is Vowel: " + isVowel);
} else {
    alert("Please enter a single character.");
}

// --- Question 5 ---
// Password Validation
var correctPassword = "mySecurePassword123";
var userPassword = prompt("Please enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

// --- Question 6 ---
// Fixed broken if/else statement
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert("Question 6 Greeting: " + greeting);

// --- Question 7 ---
// 24-hour time logic based on flowchart conditions
var time = parseInt(prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm):"), 10);

if (!isNaN(time)) {
    if (time >= 0000 && time < 1200) {
        alert("Good morning!");
    } else if (time >= 1200 && time < 1700) {
        alert("Good afternoon!");
    } else if (time >= 1700 && time < 2100) {
        alert("Good evening!");
    } else if (time >= 2100 && time <= 2359) {
        alert("Good night!");
    } else {
        alert("Invalid time entered. Please enter a value between 0000 and 2359.");
    }
}
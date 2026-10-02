// Helper function to append results nicely to the HTML page
function displayResult(questionNumber, title, content) {
    var outputDiv = document.getElementById("output");
    var qDiv = document.createElement("div");
    qDiv.className = "question-box";
    qDiv.innerHTML = "<h3>Question " + questionNumber + ": " + title + "</h3>" + content;
    outputDiv.appendChild(qDiv);
}

// -------------------------------------------------------------
// Question 1: Display current date & time
// -------------------------------------------------------------
var q1Date = new Date();
displayResult(1, "Current Date & Time", q1Date);

// -------------------------------------------------------------
// Question 2: Current month in words
// -------------------------------------------------------------
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var q2Date = new Date();
var currentMonth = monthNames[q2Date.getMonth()];
alert("Current month: " + currentMonth);
displayResult(2, "Current Month", "Current month: " + currentMonth);

// -------------------------------------------------------------
// Question 3: First 3 letters of current day
// -------------------------------------------------------------
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var q3Date = new Date();
var currentDay = dayNames[q3Date.getDay()];
alert("Today is " + currentDay);
displayResult(3, "Current Day (Short)", "Today is " + currentDay);

// -------------------------------------------------------------
// Question 4: Display "It's Fun day" on weekends
// -------------------------------------------------------------
var q4Date = new Date();
var dayIndex = q4Date.getDay();
var q4Message = "Regular weekday";

if (dayIndex === 0 || dayIndex === 6) {
    q4Message = "It's Fun day";
    alert(q4Message);
}
displayResult(4, "Weekend Check", q4Message);

// -------------------------------------------------------------
// Question 5: First 15 days or last days of month
// -------------------------------------------------------------
var q5Date = new Date();
var dateNum = q5Date.getDate();
var q5Message = "";

if (dateNum < 16) {
    q5Message = "First fifteen days of the month";
} else {
    q5Message = "Last days of the month";
}
displayResult(5, "Date Range", q5Message);

// -------------------------------------------------------------
// Question 6: Minutes since Jan 1, 1970
// -------------------------------------------------------------
var q6Date = new Date();
var millisSince1970 = q6Date.getTime();
var minutesSince1970 = millisSince1970 / (1000 * 60);

var q6Output = "Current Date: " + q6Date + "<br>" +
               "Elapsed milliseconds since January 1, 1970: " + millisSince1970 + "<br>" +
               "Elapsed minutes since January 1, 1970: " + minutesSince1970;
displayResult(6, "Elapsed Time Since 1970", q6Output);

// -------------------------------------------------------------
// Question 7: Test before noon (AM/PM)
// -------------------------------------------------------------
var q7Date = new Date();
var hours = q7Date.getHours();
var q7Message = "";

if (hours < 12) {
    q7Message = "Its AM";
} else {
    q7Message = "Its PM";
}
alert(q7Message);
displayResult(7, "AM / PM Check", q7Message);

// -------------------------------------------------------------
// Question 8: Last day of the last month of 2020
// -------------------------------------------------------------
var laterDate = new Date(2020, 11, 31);
displayResult(8, "Later Date", "Later date: " + laterDate);

// -------------------------------------------------------------
// Question 9: Days past since 1st Ramadan, 2015
// -------------------------------------------------------------
var ramadanStart = new Date("June 18, 2015");
var q9Today = new Date();
var diffTime = q9Today.getTime() - ramadanStart.getTime();
var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

alert(diffDays + " days have passed since 1st Ramadan, 2015");
displayResult(9, "Days Since Ramadan 2015", diffDays + " days have passed since 1st Ramadan, 2015");

// -------------------------------------------------------------
// Question 10: Seconds elapsed between reference date & start of 2015
// -------------------------------------------------------------
var referenceDate = new Date();
var startOf2015 = new Date("January 1, 2015 00:00:00");
var diffSeconds = Math.floor((referenceDate.getTime() - startOf2015.getTime()) / 1000);

var q10Output = "On reference date " + referenceDate + ", <br>" +
                diffSeconds + " seconds had passed since beginning of 2015";
displayResult(10, "Seconds Since Start of 2015", q10Output);

// -------------------------------------------------------------
// Question 11: Reset date 1 hour back
// -------------------------------------------------------------
var q11Date = new Date();
var originalDateStr = q11Date.toString();
q11Date.setHours(q11Date.getHours() - 1);

var q11Output = "current date: " + originalDateStr + "<br>" +
                "1 hour ago, it was " + q11Date;
displayResult(11, "1 Hour Reset", q11Output);

// -------------------------------------------------------------
// Question 12: Reset date 100 years back
// -------------------------------------------------------------
var q12Date = new Date();
var currentDateStr = q12Date.toString();
q12Date.setFullYear(q12Date.getFullYear() - 100);

alert("100 years back, it was " + q12Date);
var q12Output = "current date: " + currentDateStr + "<br>" +
                "100 years back, it was " + q12Date;
displayResult(12, "100 Years Reset", q12Output);

// -------------------------------------------------------------
// Question 13: Calculate birth year from age
// -------------------------------------------------------------
var ageInput = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - ageInput;

var q13Output = "Your age is " + ageInput + "<br>" +
                "Your birth year is " + birthYear;
displayResult(13, "Age & Birth Year Calculation", q13Output);

// -------------------------------------------------------------
// Question 14: K-Electric Bill
// -------------------------------------------------------------
var customerName = "ABC Customer";
var billMonth = monthNames[new Date().getMonth()];
var numberOfUnits = 410;
var chargesPerUnit = 16;
var lateSurcharge = 350;

var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + lateSurcharge;

var billOutput = "<h2>K-Electric Bill</h2>" +
    "<p><b>Customer Name:</b> " + customerName + "</p>" +
    "<p><b>Month:</b> " + billMonth + "</p>" +
    "<p><b>Number of units:</b> " + numberOfUnits + "</p>" +
    "<p><b>Charges per unit:</b> " + chargesPerUnit.toFixed(2) + "</p><br>" +
    "<p><b>Net Amount Payable (within Due Date):</b> " + netAmount.toFixed(2) + "</p>" +
    "<p><b>Late payment surcharge:</b> " + lateSurcharge.toFixed(2) + "</p>" +
    "<p><b>Gross Amount Payable (after Due Date):</b> " + grossAmount.toFixed(2) + "</p>";

displayResult(14, "K-Electric Bill Generator", billOutput);
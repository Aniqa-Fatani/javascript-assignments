// ==========================================
// CHAPTERS 6-9: MATH EXPRESSIONS & USER INPUT
// ==========================================

// --- Question 1 ---
document.write("Result:<br>");
var a = 10;
document.write("The value of a is: " + a + "<br>");
document.write("--------------------------------<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// --- Question 2 ---
var x = 2, y = 1;
// Explanation of stages:
// --x;             -> x becomes 1
// --x - --y;       -> 1 - 0 = 1
// --x - --y + ++y; -> 1 - 0 + 1 = 2
// --x - --y + ++y + y--; -> 1 - 0 + 1 + 1 = 3
var result = --x - --y + ++y + y--;

document.write("x is: " + x + "<br>");
document.write("y is: " + y + "<br>");
document.write("result is: " + result + "<br><br>");

// --- Question 3 ---
var userName = prompt("Enter your name:");
if (userName) {
    alert("Hello " + userName + ", welcome!");
    document.write("Hello " + userName + ", welcome!<br><br>");
}

// --- Question 5 ---
var tableInput = prompt("Enter a number for multiplication table:", "5");
var tableNum = parseInt(tableInput) || 5;

document.write("<h3>Multiplication Table of " + tableNum + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br>");

// --- Question 6 ---
var sub1 = prompt("Enter first subject name:", "English");
var sub2 = prompt("Enter second subject name:", "Math");
var sub3 = prompt("Enter third subject name:", "Urdu");

var totalMarksPerSub = 100;

var marks1 = parseFloat(prompt("Enter obtained marks for " + sub1 + ":", "54"));
var marks2 = parseFloat(prompt("Enter obtained marks for " + sub2 + ":", "54"));
var marks3 = parseFloat(prompt("Enter obtained marks for " + sub3 + ":", "48"));

var totalObtained = marks1 + marks2 + marks3;
var grandTotal = totalMarksPerSub * 3;
var totalPercentage = (totalObtained / grandTotal) * 100;

document.write("<table border='1' cellpadding='8' cellspacing='0'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarksPerSub) * 100) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarksPerSub) * 100) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarksPerSub) * 100) + "%</td></tr>");
document.write("<tr><th></th><th>" + grandTotal + "</th><th>" + totalObtained + "</th><th>" + totalPercentage.toFixed(0) + "%</th></tr>");
document.write("</table>");
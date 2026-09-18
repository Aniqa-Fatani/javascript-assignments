// ==========================================
// CHAPTERS 14-16: ARRAYS
// ==========================================

// --- Question 1 ---
// Declare an empty array using JS literal notation to store student names in future
var studentNamesLiteral = [];

// --- Question 2 ---
// Declare an empty array using JS object notation to store student names in future
var studentNamesObject = new Array();

// --- Question 3 ---
// Declare and initialize a strings array
var stringArray = ["Apple", "Banana", "Cherry"];

// --- Question 4 ---
// Declare and initialize a numbers array
var numberArray = [10, 20, 30, 40, 50];

// --- Question 5 ---
// Declare and initialize a boolean array
var booleanArray = [true, false, true, false];

// --- Question 6 ---
// Declare and initialize a mixed array
var mixedArray = ["John", 25, true, null];

// --- Question 7 ---
// Store available education qualifications in Pakistan and display in browser
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications:</h1>");
document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol><hr>");

// --- Question 8 ---
// Store student names and scores, calculate and display percentages
var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}
document.write("<hr>");

// --- Question 9 ---
// Color Array Operations
var colors = ["Red", "Green", "Blue"];
document.write("<b>Initial Colors:</b> " + colors.join(", ") + "<br><br>");

// a. Add color to beginning
var colorStart = prompt("Enter a color to add to the beginning:");
if (colorStart) {
    colors.unshift(colorStart);
}
document.write("<b>After adding to start:</b> " + colors.join(", ") + "<br>");

// b. Add color to end
var colorEnd = prompt("Enter a color to add to the end:");
if (colorEnd) {
    colors.push(colorEnd);
}
document.write("<b>After adding to end:</b> " + colors.join(", ") + "<br>");

// c. Add two colors to beginning
colors.unshift("Purple", "Orange");
document.write("<b>After adding two colors to start:</b> " + colors.join(", ") + "<br>");

// d. Delete first color
colors.shift();
document.write("<b>After deleting first color:</b> " + colors.join(", ") + "<br>");

// e. Delete last color
colors.pop();
document.write("<b>After deleting last color:</b> " + colors.join(", ") + "<br>");

// f. Add color at specific index
var addIndex = parseInt(prompt("At which index do you want to add a color?"), 10);
var addColorName = prompt("Enter the color name to add:");
if (!isNaN(addIndex) && addColorName) {
    colors.splice(addIndex, 0, addColorName);
}
document.write("<b>After adding at index " + addIndex + ":</b> " + colors.join(", ") + "<br>");

// g. Delete color(s) at specific index
var deleteIndex = parseInt(prompt("At which index do you want to delete color(s)?"), 10);
var deleteCount = parseInt(prompt("How many colors do you want to delete?"), 10);
if (!isNaN(deleteIndex) && !isNaN(deleteCount)) {
    colors.splice(deleteIndex, deleteCount);
}
document.write("<b>After deleting from index " + deleteIndex + ":</b> " + colors.join(", ") + "<br><hr>");

// --- Question 10 ---
// Sort student scores in ascending order
var studentScores = [320, 230, 480, 120];
document.write("Scores of Students : " + studentScores.join(",") + "<br>");
studentScores.sort(function(a, b) { return a - b; });
document.write("Ordered Scores of Students : " + studentScores.join(",") + "<br><hr>");

// --- Question 11 ---
// Copy 3 array elements from cities array to selectedCities array
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);

document.write("<b>Cities list:</b><br>" + cities.join(",") + "<br><br>");
document.write("<b>Selected cities list:</b><br>" + selectedCities.join(",") + "<br><hr>");

// --- Question 12 ---
// Join array elements into a single string
var arr = ["This ", " is ", " my ", " cat"];
document.write("<b>Array:</b><br>" + arr.join(",") + "<br><br>");
document.write("<b>String:</b><br>" + arr.join("") + "<br><hr>");

// --- Question 13 ---
// FIFO (First In First Out) Queue Implementation
var fifoDevices = ["keyboard", "mouse", "printer", "monitor"];

document.write("<b>Devices:</b><br>" + fifoDevices.join(",") + "<br><br>");
for (var k = 0; k < fifoDevices.length; k++) {
    document.write("Out:<br>" + fifoDevices[k] + "<br>");
}
document.write("<hr>");

// --- Question 14 ---
// LIFO (Last In First Out) Stack Implementation
var lifoDevices = ["keyboard", "mouse", "printer", "monitor"];

document.write("<b>Devices:</b><br>" + lifoDevices.join(",") + "<br><br>");
for (var l = lifoDevices.length - 1; l >= 0; l--) {
    document.write("Out:<br>" + lifoDevices[l] + "<br>");
}
document.write("<hr>");

// --- Question 15 ---
// Phone manufacturers dropdown select menu using document.write()
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var m = 0; m < phoneManufacturers.length; m++) {
    document.write("<option value='" + phoneManufacturers[m] + "'>" + phoneManufacturers[m] + "</option>");
}
document.write("</select>");
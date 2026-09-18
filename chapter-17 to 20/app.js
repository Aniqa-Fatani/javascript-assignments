// ==========================================
// CHAPTERS 17-20: ARRAYS AND LOOP
// ==========================================

// --- Question 1 ---
// Declare and initialize an empty multidimensional array (Array of arrays)
var emptyMultiArray = [[], [], []];

// --- Question 2 ---
// Declare and initialize a multidimensional array representing the matrix
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br>");
}
document.write("<hr>");

// --- Question 3 ---
// Print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}
document.write("<hr>");

// --- Question 4 ---
// Multiplication table with user input for number and length
var tableNum = parseInt(prompt("Enter a number to show its multiplication table"), 10);
var tableLen = parseInt(prompt("Enter length multiplication table"), 10);

if (!isNaN(tableNum) && !isNaN(tableLen)) {
    document.write("Multiplication table of " + tableNum + "<br>");
    document.write("Length " + tableLen + "<br><br>");
    
    for (var i = 1; i <= tableLen; i++) {
        document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
    }
}
document.write("<hr>");

// --- Question 5 ---
// Print items of the array using for loop along with their index numbers
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("<br>");

for (var j = 0; j < fruits.length; j++) {
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}
document.write("<hr>");

// --- Question 6 ---
// Series Generation

// a. Counting: 1 to 15
var counting = [];
for (var i = 1; i <= 15; i++) {
    counting.push(i);
}
document.write("<b>Counting:</b><br><br>" + counting.join(", ") + "<br><br>");

// b. Reverse counting: 10 to 1
var reverseCounting = [];
for (var i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
document.write("<b>Reverse counting:</b><br><br>" + reverseCounting.join(", ") + "<br><br>");

// c. Even: 0 to 20
var even = [];
for (var i = 0; i <= 20; i += 2) {
    even.push(i);
}
document.write("<b>Even:</b><br><br>" + even.join(", ") + "<br><br>");

// d. Odd: 1 to 19
var odd = [];
for (var i = 1; i < 20; i += 2) {
    odd.push(i);
}
document.write("<b>Odd:</b><br><br>" + odd.join(", ") + "<br><br>");

// e. Series: 2k to 20k
var series = [];
for (var i = 2; i <= 20; i += 2) {
    series.push(i + "k");
}
document.write("<b>Series:</b><br><br>" + series.join(", ") + "<br><hr>");

// --- Question 7 ---
// Search item in array based on user input
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

if (userSearch) {
    var searchItem = userSearch.toLowerCase();
    var foundIndex = bakeryItems.indexOf(searchItem);

    if (foundIndex !== -1) {
        document.write(userSearch + " is <b>available</b> at index " + foundIndex + " in our bakery<br>");
    } else {
        document.write("We are sorry. " + userSearch + " is <b>not available</b> in our bakery<br>");
    }
}
document.write("<hr>");

// --- Question 8 ---
// Identify largest number in array
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
document.write("Array items: " + numbers.join(",") + "<br>");
document.write("The largest number is " + largest + "<br><hr>");

// --- Question 9 ---
// Identify smallest number in array
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
document.write("Array items: " + numbers.join(",") + "<br>");
document.write("The smallest number is " + smallest + "<br><hr>");

// --- Question 10 ---
// Print multiples of 5 ranging 1 to 100
var multiplesOfFive = [];

for (var i = 5; i <= 100; i += 5) {
    multiplesOfFive.push(i);
}
document.write(multiplesOfFive.join(", ") + "<br>");
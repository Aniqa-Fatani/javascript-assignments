// ==========================================
// CHAPTER 5: MATH EXPRESSIONS (Complete)
// ==========================================

// --- Question 1 ---
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

// --- Question 2 ---
var diff = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var remainderResult = num1 % num2;

document.write("Subtraction of " + num1 + " and " + num2 + " is " + diff + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + product + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + quotient + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + remainderResult + "<br><br>");

// --- Question 3 ---
var myVar;
document.write("Value after variable declaration is: " + myVar + "<br>");

myVar = 5;
document.write("Initial value: " + myVar + "<br>");

myVar++;
document.write("Value after increment is: " + myVar + "<br>");

myVar = myVar + 7;
document.write("Value after addition is: " + myVar + "<br>");

myVar--;
document.write("Value after decrement is: " + myVar + "<br>");

var remainder = myVar % 3;
document.write("The remainder is : " + remainder + "<br><br>");

// --- Question 4 ---
var ticketPrice = 600;
var totalTickets = 5;
var totalCost = ticketPrice * totalTickets;
document.write("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + "PKR<br><br>");

// --- Question 5 ---
var tableNum = 4;
document.write("Table of " + tableNum + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNum + "x" + i + "=" + (tableNum * i) + "<br>");
}
document.write("<br>");

// --- Question 6 ---
var celsius = 25;
var celsiusToFahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + celsiusToFahrenheit + "°F<br>");

var fahrenheit = 70;
var fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + fahrenheitToCelsius + "°C<br><br>");

// --- Question 7 ---
document.write("<h1>Shopping Cart</h1>");
var item1Price = 650;
var item2Price = 100;
var item1Qty = 3;
var item2Qty = 7;
var shippingCharges = 100;

var totalCartCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Qty + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Qty + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCartCost + "<br><br>");

// --- Question 8 ---
document.write("<h1>Marks Sheet</h1>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");

// --- Question 9 ---
document.write("<h1>Currency in PKR</h1>");
var usd = 10;
var sar = 25;
var totalPkr = (usd * 104.80) + (sar * 28);

document.write("Total Currency in PKR: " + totalPkr + "<br><br>");

// --- Question 10 ---
var arithmeticNum = 10;
var arithmeticResult = ((arithmeticNum + 5) * 10) / 2;

// --- Question 11 ---
document.write("<h1>Age Calculator</h1>");
var currentYear = 2026;
var birthYear = 1992;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old<br><br>");

// --- Question 12 ---
document.write("<h1>The Geometrizer</h1>");
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * (radius * radius);

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");

// --- Question 13 ---
document.write("<h1>The Lifetime Supply Calculator</h1>");
var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var totalSnacksNeeded = (maxAge - currentAge) * 365 * amountPerDay;

document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");
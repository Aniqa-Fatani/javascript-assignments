  // ==========================================
// CHAPTER 4: VARIABLE NAMES: LEGAL & ILLEGAL
// ==========================================

// 1. Declare 3 variables in one statement.
var var1 = "First", var2 = "Second", var3 = "Third";

// 2. Declare 5 legal & 5 illegal variable names.

// --- 5 Legal Variable Names ---
var myVariable;
var $money;
var _user_age;
var user123;
var first_name;

// --- 5 Illegal Variable Names (commented out to avoid syntax errors) ---
// var 123user;      // Cannot start with a number
// var my-variable;  // Hyphens are not allowed
// var user name;    // Spaces are not allowed
// var var;          // Reserved JavaScript keyword
// var user@email;   // Special characters other than $ and _ are not allowed


// 3. Display rules for naming JS variables in your browser:
document.write("<h1>Rules for naming JS variables</h1>");

document.write("Variable names can only contain <b>numbers</b>, <b>$</b>, and <b>_</b>. For example: <b>$my_1stVariable</b><br>");

document.write("Variables must begin with a <b>letter</b>, <b>$</b>, or <b>_</b>. For example: <b>$name</b>, <b>_name</b>, or <b>name</b><br>");

document.write("Variable names are case <b>sensitive</b><br>");

document.write("Variable names should not be JS <b>keywords</b><br>");
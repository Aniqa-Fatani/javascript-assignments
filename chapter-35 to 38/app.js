// Helper output function
function showOutput(id, content) {
    var el = document.getElementById(id);
    el.innerHTML = content;
    el.style.display = 'block';
}

// Q1: Display current date & time[span_0](start_span)[span_0](end_span)
function solveQ1() {
    function displayDateTime() {
        return new Date();
    }
    showOutput('out1', "Current Date & Time: <strong>" + displayDateTime() + "</strong>");
}

// Q2: Greet user using full name[span_1](start_span)[span_1](end_span)
function solveQ2() {
    var first = document.getElementById('q2_first').value;
    var last = document.getElementById('q2_last').value;
    function greetUser(f, l) {
        return "Hello " + f + " " + l + "!";
    }
    showOutput('out2', greetUser(first, last));
}

// Q3: Add two numbers and return sum[span_2](start_span)[span_2](end_span)
function solveQ3() {
    var num1 = Number(document.getElementById('q3_num1').value);
    var num2 = Number(document.getElementById('q3_num2').value);
    function addNumbers(a, b) {
        return a + b;
    }
    showOutput('out3', "Sum: <strong>" + addNumbers(num1, num2) + "</strong>");
}

// Q4: Calculator[span_3](start_span)[span_3](end_span)[span_4](start_span)[span_4](end_span)
function solveQ4() {
    var num1 = Number(document.getElementById('q4_num1').value);
    var num2 = Number(document.getElementById('q4_num2').value);
    var op = document.getElementById('q4_op').value;

    function calculator(n1, n2, operation) {
        if (operation === "+") return n1 + n2;
        if (operation === "-") return n1 - n2;
        if (operation === "*") return n1 * n2;
        if (operation === "/") return n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        return "Invalid operator";
    }
    showOutput('out4', "Result: <strong>" + calculator(num1, num2, op) + "</strong>");
}

// Q5: Square argument[span_5](start_span)[span_5](end_span)
function solveQ5() {
    var n = Number(document.getElementById('q5_num').value);
    function square(num) {
        return num * num;
    }
    showOutput('out5', "Square of " + n + " is: <strong>" + square(n) + "</strong>");
}

// Q6: Factorial of a number[span_6](start_span)[span_6](end_span)
function solveQ6() {
    var n = Number(document.getElementById('q6_num').value);
    function factorial(num) {
        if (num < 0) return "Undefined for negative numbers";
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    showOutput('out6', "Factorial of " + n + " is: <strong>" + factorial(n) + "</strong>");
}

// Q7: Counting from start to end[span_7](start_span)[span_7](end_span)
function solveQ7() {
    var start = Number(document.getElementById('q7_start').value);
    var end = Number(document.getElementById('q7_end').value);
    function displayCounting(s, e) {
        var str = "";
        if (s <= e) {
            for (var i = s; i <= e; i++) {
                str += i + " ";
            }
        } else {
            for (var i = s; i >= e; i--) {
                str += i + " ";
            }
        }
        return str;
    }
    showOutput('out7', "Counting: <strong>" + displayCounting(start, end) + "</strong>");
}

// Q8: Hypotenuse calculation using nested functions[span_8](start_span)[span_8](end_span)[span_9](start_span)[span_9](end_span)
function solveQ8() {
    var base = Number(document.getElementById('q8_base').value);
    var perp = Number(document.getElementById('q8_perp').value);

    function calculateHypotenuse(b, p) {
        function calculateSquare(num) {
            return num * num;
        }
        var hyp = Math.sqrt(calculateSquare(b) + calculateSquare(p));
        return hyp;
    }
    showOutput('out8', "Hypotenuse: <strong>" + calculateHypotenuse(base, perp).toFixed(2) + "</strong>");
}

// Q9: Area of a rectangle[span_10](start_span)[span_10](end_span)
function solveQ9() {
    var w = Number(document.getElementById('q9_width').value);
    var h = Number(document.getElementById('q9_height').value);

    function calculateArea(width, height) {
        return width * height;
    }
    showOutput('out9', "Area of Rectangle: <strong>" + calculateArea(w, h) + "</strong>");
}

// Q10: Palindrome check[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span)
function solveQ10() {
    var str = document.getElementById('q10_str').value;
    function checkPalindrome(s) {
        var cleanStr = s.toLowerCase();
        var reversed = cleanStr.split("").reverse().join("");
        return cleanStr === reversed;
    }
    var res = checkPalindrome(str);
    showOutput('out10', str + " is a palindrome? <strong>" + res + "</strong>");
}

// Q11: Capitalize first letter of each word[span_13](start_span)[span_13](end_span)
function solveQ11() {
    var str = document.getElementById('q11_str').value;
    function capitalizeWords(text) {
        var words = text.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                words[i] = words[i][0].toUpperCase() + words[i].slice(1);
            }
        }
        return words.join(" ");
    }
    showOutput('out11', "Expected Output: <strong>" + capitalizeWords(str) + "</strong>");
}

// Q12: Find longest word in string[span_14](start_span)[span_14](end_span)[span_15](start_span)[span_15](end_span)
function solveQ12() {
    var str = document.getElementById('q12_str').value;
    function findLongestWord(text) {
        var words = text.split(" ");
        var longest = "";
        for (var i = 0; i < words.length; i++) {
            if (words[i].length > longest.length) {
                longest = words[i];
            }
        }
        return longest;
    }
    showOutput('out12', "Longest Word: <strong>" + findLongestWord(str) + "</strong>");
}

// Q13: Count letter occurrences[span_16](start_span)[span_16](end_span)
function solveQ13() {
    var str = document.getElementById('q13_str').value;
    var letter = document.getElementById('q13_char').value;

    function countLetter(text, char) {
        var count = 0;
        for (var i = 0; i < text.length; i++) {
            if (text[i].toLowerCase() === char.toLowerCase()) {
                count++;
            }
        }
        return count;
    }
    showOutput('out13', "Occurrences of '" + letter + "': <strong>" + countLetter(str, letter) + "</strong>");
}

// Q14: The Geometrizer[span_17](start_span)[span_17](end_span)[span_18](start_span)[span_18](end_span)[span_19](start_span)[span_19](end_span)
function solveQ14() {
    var r = Number(document.getElementById('q14_radius').value);

    function calcCircumference(radius) {
        var c = 2 * Math.PI * radius;
        return "The circumference is " + c.toFixed(2);
    }

    function calcArea(radius) {
        var a = Math.PI * radius * radius;
        return "The area is " + a.toFixed(2);
    }

    showOutput('out14', calcCircumference(r) + "<br>" + calcArea(r));
}
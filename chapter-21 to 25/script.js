// Helper Function to render results into UI cards
function showOutput(elementId, content) {
    var el = document.getElementById(elementId);
    el.innerHTML = content;
    el.style.display = 'block';
}

// Question 1: Greet User
function solveQ1() {
    var firstName = document.getElementById('q1_first').value;
    var lastName = document.getElementById('q1_last').value;
    var fullName = firstName + " " + lastName;
    showOutput('out1', "Hello, <strong>" + fullName + "</strong>!");
}

// Question 2: Favorite Phone Model Length
function solveQ2() {
    var phone = document.getElementById('q2_phone').value;
    showOutput('out2', "My favorite phone is: <strong>" + phone + "</strong><br>Length of string: <strong>" + phone.length + "</strong>");
}

// Question 3: Index of 'n' in Pakistani
function solveQ3() {
    var word = "Pakistani";
    showOutput('out3', "String: <strong>" + word + "</strong><br>Index of 'n': <strong>" + word.indexOf('n') + "</strong>");
}

// Question 4: Last Index of 'l' in Hello World
function solveQ4() {
    var str = "Hello World";
    showOutput('out4', "String: <strong>" + str + "</strong><br>Last index of 'l': <strong>" + str.lastIndexOf('l') + "</strong>");
}

// Question 5: Character at index 3 in Pakistani
function solveQ5() {
    var word = "Pakistani";
    showOutput('out5', "String: <strong>" + word + "</strong><br>Character at index 3: <strong>" + word.charAt(3) + "</strong>");
}

// Question 6: Concat First & Last Name
function solveQ6() {
    var firstName = document.getElementById('q6_first').value;
    var lastName = document.getElementById('q6_last').value;
    var fullName = firstName.concat(" ", lastName);
    showOutput('out6', "Hello, <strong>" + fullName + "</strong>!");
}

// Question 7: Replace Hyder with Islam
function solveQ7() {
    var city = "Hyderabad";
    var result = city.replace("Hyder", "Islam");
    showOutput('out7', "City: <strong>" + city + "</strong><br>After replacement: <strong>" + result + "</strong>");
}

// Question 8: Replace 'and' with '&'
function solveQ8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var result = message.replaceAll("and", "&");
    showOutput('out8', "Original: " + message + "<br><br><strong>Replaced:</strong> " + result);
}

// Question 9: Convert String "472" to Number
function solveQ9() {
    var strNum = "472";
    var num = Number(strNum);
    showOutput('out9', "Value: " + strNum + " (Type: " + typeof strNum + ")<br>Value: " + num + " (Type: " + typeof num + ")");
}

// Question 10: Uppercase Conversion
function solveQ10() {
    var text = document.getElementById('q10_text').value;
    showOutput('out10', "User input: " + text + "<br>Upper case: <strong>" + text.toUpperCase() + "</strong>");
}

// Question 11: Title Case Conversion
function solveQ11() {
    var text = document.getElementById('q11_text').value;
    if (text.length === 0) return;
    var titleCase = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    showOutput('out11', "User input: " + text + "<br>Title case: <strong>" + titleCase + "</strong>");
}

// Question 12: Remove Dot from Number String
function solveQ12() {
    var num = 35.36;
    var result = num.toString().replace(".", "");
    showOutput('out12', "Number: " + num + "<br>Result: <strong>" + result + "</strong>");
}

// Question 13: Username Validation
function solveQ13() {
    var user = document.getElementById('q13_user').value;
    var isValid = true;
    for (var i = 0; i < user.length; i++) {
        var code = user.charCodeAt(i);
        if (code === 33 || code === 44 || code === 46 || code === 64) {
            isValid = false;
            break;
        }
    }
    if (!isValid) {
        showOutput('out13', "<span style='color:red;'>Please enter a valid username without [@, ., ,, !]</span>");
    } else {
        showOutput('out13', "<span style='color:green;'>Username accepted: <strong>" + user + "</strong></span>");
    }
}

// Question 14: Bakery Search
function solveQ14() {
    var items = ["cake", "apple pie", "cookie", "chips", "patties"];
    var order = document.getElementById('q14_item').value;
    var index = -1;
    for (var i = 0; i < items.length; i++) {
        if (items[i].toLowerCase() === order.toLowerCase()) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        showOutput('out14', "<strong>" + order + "</strong> is available at index " + index + " in our bakery.");
    } else {
        showOutput('out14', "We are sorry. <strong>" + order + "</strong> is not available in our bakery.");
    }
}

// Question 15: Password Validation
function solveQ15() {
    var pass = document.getElementById('q15_pass').value;
    var hasAlpha = false, hasNum = false, startsWithNum = false;
    var isLong = pass.length >= 6;

    var firstCode = pass.charCodeAt(0);
    if (firstCode >= 48 && firstCode <= 57) startsWithNum = true;

    for (var i = 0; i < pass.length; i++) {
        var code = pass.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) hasAlpha = true;
        else if (code >= 48 && code <= 57) hasNum = true;
    }

    if (!isLong || !hasAlpha || !hasNum || startsWithNum) {
        var msg = "<span style='color:red;'>Invalid Password!</span><br>";
        if (startsWithNum) msg += "- Password cannot begin with a number<br>";
        if (!isLong) msg += "- Password must be at least 6 characters long<br>";
        if (!hasAlpha || !hasNum) msg += "- Password must contain alphabets and numbers<br>";
        showOutput('out15', msg);
    } else {
        showOutput('out15', "<span style='color:green;'>Valid Password entered!</span>");
    }
}

// Question 16: Display Array Vertically
function solveQ16() {
    var uni = "University of Karachi";
    var arr = uni.split("");
    var html = "<strong>Array Output:</strong><br>";
    for (var i = 0; i < arr.length; i++) {
        html += arr[i] + "<br>";
    }
    showOutput('out16', html);
}

// Question 17: Last Character
function solveQ17() {
    var text = document.getElementById('q17_text').value;
    if (text.length === 0) return;
    var last = text.charAt(text.length - 1);
    showOutput('out17', "User input: <strong>" + text + "</strong><br>Last character of input: <strong>" + last + "</strong>");
}

// Question 18: Count Occurrences of 'the'
function solveQ18() {
    var text = "The quick brown fox jumps over the lazy dog";
    var words = text.toLowerCase().split(" ");
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] === "the") count++;
    }
    showOutput('out18', "Text: " + text + "<br>There are <strong>" + count + "</strong> occurrence(s) of word 'the'.");
}
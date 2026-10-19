// Helper output function
function showOutput(id, content) {
    var el = document.getElementById(id);
    el.innerHTML = content;
    el.style.display = 'block';
}

// Q1: Custom power function[span_4](start_span)[span_4](end_span)
function solveQ1() {
    var a = Number(document.getElementById('q1_a').value);
    var b = Number(document.getElementById('q1_b').value);

    function power(base, exp) {
        var result = 1;
        for (var i = 0; i < exp; i++) {
            result *= base;
        }
        return result;
    }
    showOutput('out1', a + " raised to " + b + " = <strong>" + power(a, b) + "</strong>");
}

// Q2: Leap year checker[span_5](start_span)[span_5](end_span)
function solveQ2() {
    var year = Number(document.getElementById('q2_year').value);

    function checkLeapYear(yr) {
        if ((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0)) {
            return yr + " is a leap year.";
        } else {
            return yr + " is not a leap year.";
        }
    }
    showOutput('out2', "<strong>" + checkLeapYear(year) + "</strong>");
}

// Q3: Area of triangle using 2 functions[span_6](start_span)[span_6](end_span)[span_7](start_span)[span_7](end_span)
function solveQ3() {
    var a = Number(document.getElementById('q3_a').value);
    var b = Number(document.getElementById('q3_b').value);
    var c = Number(document.getElementById('q3_c').value);

    function calculateS(side1, side2, side3) {
        return (side1 + side2 + side3) / 2;
    }

    function calculateArea(side1, side2, side3) {
        var S = calculateS(side1, side2, side3);
        var area = Math.sqrt(S * (S - side1) * (S - side2) * (S - side3));
        return area;
    }
    showOutput('out3', "Area of triangle: <strong>" + calculateArea(a, b, c).toFixed(2) + "</strong>");
}

// Q4: Student marks average & percentage[span_8](start_span)[span_8](end_span)
function solveQ4() {
    var m1 = Number(document.getElementById('q4_m1').value);
    var m2 = Number(document.getElementById('q4_m2').value);
    var m3 = Number(document.getElementById('q4_m3').value);

    function mainFunction(sub1, sub2, sub3) {
        function getAverage(a, b, c) {
            return (a + b + c) / 3;
        }
        function getPercentage(a, b, c) {
            var totalMarks = 300;
            var obtained = a + b + c;
            return (obtained / totalMarks) * 100;
        }
        var avg = getAverage(sub1, sub2, sub3);
        var perc = getPercentage(sub1, sub2, sub3);
        return "Average Marks: " + avg.toFixed(2) + "<br>Percentage: " + perc.toFixed(2) + "%";
    }
    showOutput('out4', mainFunction(m1, m2, m3));
}

// Q5: Custom indexOf function[span_9](start_span)[span_9](end_span)
function solveQ5() {
    var str = document.getElementById('q5_str').value;
    var char = document.getElementById('q5_char').value;

    function customIndexOf(text, targetChar) {
        for (var i = 0; i < text.length; i++) {
            if (text[i] === targetChar) {
                return i;
            }
        }
        return -1;
    }
    showOutput('out5', "Index of '" + char + "': <strong>" + customIndexOf(str, char) + "</strong>");
}

// Q6: Delete all vowels from sentence[span_10](start_span)[span_10](end_span)
function solveQ6() {
    var str = document.getElementById('q6_str').value;

    function removeVowels(sentence) {
        if (sentence.length > 25) return "Error: Sentence exceeds 25 characters.";
        var result = "";
        for (var i = 0; i < sentence.length; i++) {
            var char = sentence[i].toLowerCase();
            if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
                result += sentence[i];
            }
        }
        return result;
    }
    showOutput('out6', "Without vowels: <strong>" + removeVowels(str) + "</strong>");
}

// Q7: Count successive vowels using switch[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span)
function solveQ7() {
    var text = document.getElementById('q7_str').value;

    function isVowel(char) {
        switch (char.toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true;
            default:
                return false;
        }
    }

    function countSuccessiveVowels(str) {
        var count = 0;
        var pairs = [];
        str = str.toLowerCase();
        for (var i = 0; i < str.length - 1; i++) {
            var c1 = str[i];
            var c2 = str[i+1];
            if (isVowel(c1) && isVowel(c2)) {
                count++;
                pairs.push(c1 + c2);
            }
        }
        return "Total occurrences: " + count + "<br>Pairs found: " + pairs.join(", ");
    }
    showOutput('out7', countSuccessiveVowels(text));
}

// Q8: Distance converter (4 functions)[span_13](start_span)[span_13](end_span)
function solveQ8() {
    var km = Number(document.getElementById('q8_km').value);

    function toMeters(val) { return val * 1000; }
    function toFeet(val) { return val * 3280.84; }
    function toInches(val) { return val * 39370.1; }
    function toCentimeters(val) { return val * 100000; }

    var output = "Distance in meters: " + toMeters(km) + " m<br>" +
                 "Distance in feet: " + toFeet(km).toFixed(2) + " ft<br>" +
                 "Distance in inches: " + toInches(km).toFixed(2) + " in<br>" +
                 "Distance in centimeters: " + toCentimeters(km) + " cm";
    showOutput('out8', output);
}

// Q9: Overtime pay calculator[span_14](start_span)[span_14](end_span)
function solveQ9() {
    var hours = Number(document.getElementById('q9_hours').value);

    function calculateOvertime(hrs) {
        if (hrs > 40) {
            var extraHours = hrs - 40;
            var pay = extraHours * 12.00;
            return "Overtime Pay: Rs. " + pay.toFixed(2);
        } else {
            return "No overtime pay (Worked 40 hours or less).";
        }
    }
    showOutput('out9', calculateOvertime(hours));
}

// Q10: Cashier currency notes[span_15](start_span)[span_15](end_span)[span_16](start_span)[span_16](end_span)
function solveQ10() {
    var amount = Number(document.getElementById('q10_amount').value);

    function calculateNotes(amt) {
        var hundreds = Math.floor(amt / 100);
        var remainder = amt % 100;
        var fifties = Math.floor(remainder / 50);
        remainder = remainder % 50;
        var tens = Math.floor(remainder / 10);

        return "You will have <strong>" + hundreds + " hundred notes, " + fifties + " fifty notes, " + tens + " ten notes.</strong>";
    }
    showOutput('out10', calculateNotes(amount));
}
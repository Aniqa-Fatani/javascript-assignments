// State Variables
var currentInput = "0";
var expression = "";
var historyLogs = [];

// DOM References
var mainScreen = document.getElementById("main-screen");
var historyScreen = document.getElementById("history-screen");
var liveTimeEl = document.getElementById("live-time");
var historyBodyEl = document.getElementById("history-body");

// Initialize App
function init() {
    updateClock();
    setInterval(updateClock, 1000); // Live date/time (Ch. 31-34)[span_0](start_span)[span_0](end_span)
    updateScreens();
}

// 1. Date & Time using Date Methods (Ch. 31-34)[span_1](start_span)[span_1](end_span)
function updateClock() {
    var now = new Date();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    var dayName = days[now.getDay()];
    var monthName = months[now.getMonth()];
    var dateNum = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    var formattedM = minutes < 10 ? '0' + minutes : minutes;
    var formattedS = seconds < 10 ? '0' + seconds : seconds;

    liveTimeEl.innerText = dayName + " " + dateNum + " " + monthName + " | " + hours + ":" + formattedM + ":" + formattedS + " " + ampm;
}

// 2. Screen & Input Handling
function updateScreens() {
    mainScreen.innerText = currentInput;
    historyScreen.innerText = expression;
}

function appendNumber(num) {
    if (currentInput === "0" && num !== ".") {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateScreens();
}

function appendOperator(op) {
    expression += currentInput + " " + op + " ";
    currentInput = "0";
    updateScreens();
}

function clearScreen() {
    currentInput = "0";
    expression = "";
    updateScreens();
}

function deleteChar() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateScreens();
}

// 3. Calculation & Switch / Functions (Ch. 38-42)[span_2](start_span)[span_2](end_span)
function calculateResult() {
    if (expression === "") return;
    
    var fullExpr = expression + currentInput;
    var result;

    try {
        result = eval(fullExpr);
    } catch (e) {
        result = "Error";
    }

    addHistoryLog(fullExpr, result);
    expression = "";
    currentInput = String(result);
    updateScreens();
}

// 4. Advanced Math Toolkit using Math & Custom Functions (Ch. 26-42)[span_3](start_span)[span_3](end_span)[span_4](start_span)[span_4](end_span)
function applyAdvanced(type) {
    var num = Number(currentInput);
    var res;

    switch (type) {
        case 'square':
            res = num * num;
            break;
        case 'sqrt':
            if (num < 0) {
                alert("Invalid Input for Square Root");
                return;
            }
            res = Math.sqrt(num);
            break;
        case 'cube':
            res = num * num * num;
            break;
        case 'factorial':
            if (num < 0 || num > 17) {
                alert("Factorial undefined or too large");
                return;
            }
            res = 1;
            for (var i = 2; i <= num; i++) {
                res *= i;
            }
            break;
        default:
            res = num;
    }

    var exprLabel = type.toUpperCase() + "(" + num + ")";
    addHistoryLog(exprLabel, res);
    currentInput = String(res);
    updateScreens();
}

// 5. History Table Management (Ch. 43-48 Events & DOM Deletion)[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span)[span_7](start_span)[span_7](end_span)
function addHistoryLog(expr, res) {
    var now = new Date();
    var timeStr = now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ":" + (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();

    var logItem = {
        time: timeStr,
        expression: expr,
        result: res
    };

    historyLogs.push(logItem);
    renderTable();
}

function renderTable() {
    historyBodyEl.innerHTML = "";

    for (var i = 0; i < historyLogs.length; i++) {
        var item = historyLogs[i];
        var tr = document.createElement("tr");

        tr.innerHTML = 
            "<td>" + (i + 1) + "</td>" +
            "<td>" + item.time + "</td>" +
            "<td>" + item.expression + "</td>" +
            "<td><strong>" + item.result + "</strong></td>" +
            "<td><button class='btn-sm-del' onclick='deleteLog(" + i + ")'>✕</button></td>";

        historyBodyEl.appendChild(tr);
    }
}

function deleteLog(index) {
    historyLogs.splice(index, 1);
    renderTable();
}

function clearAllHistory() {
    historyLogs = [];
    renderTable();
}

// Initialize Application on Load
init();
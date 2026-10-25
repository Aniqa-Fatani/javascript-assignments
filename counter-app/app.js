// State Variables
var count = 0;
var historyLogs = [];

// DOM References
var counterEl = document.getElementById("counter-value");
var statusBadgeEl = document.getElementById("status-badge");
var timeDisplayEl = document.getElementById("time-display");
var historyBodyEl = document.getElementById("history-body");

// Initialize Application
function init() {
    updateTime();
    setInterval(updateTime, 1000); // Live time update
    renderDisplay();
}

// 1. Time Display using Date Methods (Ch. 31-34)
function updateTime() {
    var now = new Date();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    var dayName = days[now.getDay()];
    var monthName = months[now.getMonth()];
    var dateNum = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // AM/PM calculation
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // convert 0 to 12
    
    var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    timeDisplayEl.innerText = dayName + " " + dateNum + " " + monthName + " | " + hours + ":" + formattedMinutes + ":" + formattedSeconds + " " + ampm;
}

// 2. Main Counter Logic using Switch Statement (Ch. 38-42)
function changeCounter(action) {
    var stepSize = Number(document.getElementById("step-input").value) || 1;
    var maxLimit = Number(document.getElementById("max-input").value) || 100;

    switch (action) {
        case 'increment':
            if (count + 1 > maxLimit) {
                alert("Upper Limit of " + maxLimit + " reached!");
                return;
            }
            count++;
            break;

        case 'decrement':
            count--;
            break;

        case 'step':
            if (count + stepSize > maxLimit) {
                alert("Adding step size exceeds Limit (" + maxLimit + ")");
                return;
            }
            count += stepSize;
            break;

        default:
            break;
    }

    renderDisplay();
}

// 3. Reset Function
function resetCounter() {
    count = 0;
    renderDisplay();
}

// 4. Random Value Generator using Math Methods (Ch. 26-30)
function generateRandom() {
    var maxLimit = Number(document.getElementById("max-input").value) || 100;
    // Generate random integer between -20 and maxLimit
    var randomVal = Math.floor(Math.random() * (maxLimit + 20)) - 20;
    count = randomVal;
    renderDisplay();
}

// 5. Update UI & Status Badges
function renderDisplay() {
    counterEl.innerText = count;

    // Visual animation pop
    counterEl.style.transform = "scale(1.15)";
    setTimeout(function() {
        counterEl.style.transform = "scale(1)";
    }, 150);

    // Color feedback
    if (count > 0) {
        counterEl.style.color = "#10b981"; // Emerald
    } else if (count < 0) {
        counterEl.style.color = "#f43f5e"; // Rose Red
    } else {
        counterEl.style.color = "#f8fafc"; // White
    }

    // Math Check: Even/Odd & Positive/Negative
    var isEven = (count % 2 === 0) ? "Even" : "Odd";
    var sign = "Neutral";
    if (count > 0) sign = "Positive";
    if (count < 0) sign = "Negative";

    statusBadgeEl.innerText = isEven + " • " + sign;
}

// 6. Log Snapshot to History Table (Events & Table Operations Ch. 43-48)
function logSnapshot() {
    var now = new Date();
    var timeStr = now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ":" + (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
    
    var logItem = {
        id: historyLogs.length + 1,
        time: timeStr,
        value: count,
        type: (count % 2 === 0) ? "Even" : "Odd"
    };

    historyLogs.push(logItem);
    renderTable();
}

// Render Table Rows Dynamically
function renderTable() {
    historyBodyEl.innerHTML = "";

    for (var i = 0; i < historyLogs.length; i++) {
        var item = historyLogs[i];
        var tr = document.createElement("tr");

        tr.innerHTML = 
            "<td>" + (i + 1) + "</td>" +
            "<td>" + item.time + "</td>" +
            "<td><strong>" + item.value + "</strong></td>" +
            "<td>" + item.type + "</td>" +
            "<td><button class='btn-sm-del' onclick='deleteLog(" + i + ")'>✕</button></td>";

        historyBodyEl.appendChild(tr);
    }
}

// Delete Specific Log Row (Ch. 43-48 Table Deletion)
function deleteLog(index) {
    historyLogs.splice(index, 1);
    renderTable();
}

// Clear All Logs
function clearLogs() {
    historyLogs = [];
    renderTable();
}

// Run Application
init();
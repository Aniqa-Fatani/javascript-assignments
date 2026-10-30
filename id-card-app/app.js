// Global State Storage
var memberDirectory = [];

// DOM Element References
var inputName = document.getElementById("fullName");
var inputRole = document.getElementById("roleTitle");
var inputBatch = document.getElementById("batchCode");
var inputCourse = document.getElementById("courseName");
var inputPhone = document.getElementById("phoneNum");
var inputPhoto = document.getElementById("photoUrl");

var cardName = document.getElementById("cardName");
var cardRole = document.getElementById("cardRole");
var cardBatch = document.getElementById("cardBatch");
var cardCourse = document.getElementById("cardCourse");
var cardPhone = document.getElementById("cardPhone");
var cardPhoto = document.getElementById("cardPhoto");
var cardIssueDate = document.getElementById("cardIssueDate");

var liveTimeEl = document.getElementById("live-time");
var directoryBodyEl = document.getElementById("directory-body");

// Initialize Application
function init() {
    updateClock();
    setInterval(updateClock, 1000); // Live time update (Ch. 31-34)[span_4](start_span)[span_4](end_span)
    setDefaultValues();
    updateLivePreview();
}

// 1. Date & Time Formatter (Ch. 31-34)[span_5](start_span)[span_5](end_span)
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

// 2. Default Input Form Values
function setDefaultValues() {
    inputName.value = "Annie";
    inputRole.value = "Web Developer";
    inputBatch.value = "BATCH-10-890";
    inputCourse.value = "Web Development";
    inputPhone.value = "0300-1234567";

    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = (today.getMonth() + 1 < 10 ? '0' : '') + (today.getMonth() + 1);
    var dd = (today.getDate() < 10 ? '0' : '') + today.getDate();
    cardIssueDate.innerText = yyyy + "-" + mm + "-" + dd;
}

// 3. Live Form Preview Function (Ch. 43-48 Form Events)[span_6](start_span)[span_6](end_span)
function updateLivePreview() {
    cardName.innerText = inputName.value.trim() !== "" ? capitalizeText(inputName.value) : "Full Name";
    cardRole.innerText = inputRole.value.trim() !== "" ? inputRole.value : "Member Role";
    cardBatch.innerText = inputBatch.value.trim() !== "" ? inputBatch.value.toUpperCase() : "ID-000";
    cardCourse.innerText = inputCourse.value.trim() !== "" ? inputCourse.value : "Course Name";
    cardPhone.innerText = inputPhone.value.trim() !== "" ? inputPhone.value : "N/A";

    if (inputPhoto.value.trim() !== "") {
        cardPhoto.src = inputPhoto.value;
    } else {
        cardPhoto.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200";
    }
}

// Helper: Capitalize String First Letters (Ch. 21-25 String Methods)[span_7](start_span)[span_7](end_span)
function capitalizeText(text) {
    var words = text.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    return words.join(" ");
}

// 4. Save Record to Table Directory
function saveCardRecord() {
    if (inputName.value.trim() === "" || inputBatch.value.trim() === "") {
        alert("Please enter Name and Batch/ID Number!");
        return;
    }

    var memberObj = {
        name: capitalizeText(inputName.value),
        role: inputRole.value,
        batch: inputBatch.value.toUpperCase(),
        course: inputCourse.value,
        issueDate: cardIssueDate.innerText
    };

    memberDirectory.push(memberObj);
    renderDirectoryTable();
    alert("ID Card generated and registered successfully!");
}

// 5. Render Directory Table Rows (Ch. 43-48 Events & Deletion)[span_8](start_span)[span_8](end_span)[span_9](start_span)[span_9](end_span)[span_10](start_span)[span_10](end_span)
function renderDirectoryTable() {
    directoryBodyEl.innerHTML = "";

    for (var i = 0; i < memberDirectory.length; i++) {
        var member = memberDirectory[i];
        var tr = document.createElement("tr");

        tr.innerHTML = 
            "<td>" + (i + 1) + "</td>" +
            "<td><strong>" + member.batch + "</strong></td>" +
            "<td>" + member.name + "</td>" +
            "<td>" + member.role + "</td>" +
            "<td>" + member.course + "</td>" +
            "<td>" + member.issueDate + "</td>" +
            "<td><button class='btn-sm-del' onclick='deleteDirectoryRecord(" + i + ")'>✕ Delete</button></td>";

        directoryBodyEl.appendChild(tr);
    }
}

// Delete Record Function (Ch. 43-48)[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span)
function deleteDirectoryRecord(index) {
    memberDirectory.splice(index, 1);
    renderDirectoryTable();
}

function clearAllCards() {
    memberDirectory = [];
    renderDirectoryTable();
}

// Reset Form Inputs
function resetFormInputs() {
    inputName.value = "";
    inputRole.value = "";
    inputBatch.value = "";
    inputCourse.value = "";
    inputPhone.value = "";
    inputPhoto.value = "";
    updateLivePreview();
}

// Initialize on Load
init();
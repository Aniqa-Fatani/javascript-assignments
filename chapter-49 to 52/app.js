// ==========================================
// Q1: Signup Form Submission Handling[span_5](start_span)[span_5](end_span)
// ==========================================
function handleSignup(event) {
    event.preventDefault();

    var name = document.getElementById("suName").value;
    var email = document.getElementById("suEmail").value;
    var phone = document.getElementById("suPhone").value || "N/A";

    document.getElementById("resName").innerText = "Name: " + name;
    document.getElementById("resEmail").innerText = "Email: " + email;
    document.getElementById("resPhone").innerText = "Phone: " + phone;

    document.getElementById("signupOutput").style.display = "block";
    document.getElementById("signupForm").reset();
}

// ==========================================
// Q2: Read More / Read Less Toggle[span_6](start_span)[span_6](end_span)
// ==========================================
function toggleReadMore() {
    var extraText = document.getElementById("extraText");
    var extraDots = document.getElementById("extraDots");
    var btn = document.getElementById("readMoreBtn");

    if (extraText.style.display === "none") {
        extraText.style.display = "inline";
        extraDots.style.display = "none";
        btn.innerText = "Read Less";
    } else {
        extraText.style.display = "none";
        extraDots.style.display = "inline";
        btn.innerText = "Read More";
    }
}

// ==========================================
// Q3: Student Records Management (Add, Edit, Delete)[span_7](start_span)[span_7](end_span)
// ==========================================
var studentsList = [
    { name: "Jhone Doe", grade: "10", email: "jhone@example.com" },
    { name: "Mark Smith", grade: "9", email: "mark@example.com" }
];

var studentBodyEl = document.getElementById("studentBody");
var editIndexEl = document.getElementById("editIndex");
var saveBtnEl = document.getElementById("saveBtn");

function renderStudentTable() {
    studentBodyEl.innerHTML = "";

    for (var i = 0; i < studentsList.length; i++) {
        var std = studentsList[i];
        var tr = document.createElement("tr");

        tr.innerHTML = 
            "<td>" + (i + 1) + "</td>" +
            "<td>" + std.name + "</td>" +
            "<td>" + std.grade + "</td>" +
            "<td>" + std.email + "</td>" +
            "<td>" +
                "<button class='btn-sm-edit' onclick='editStudent(" + i + ")'>Edit</button>" +
                "<button class='btn-sm-del' onclick='deleteStudent(" + i + ")'>Delete</button>" +
            "</td>";

        studentBodyEl.appendChild(tr);
    }
}

function saveStudentRecord(event) {
    event.preventDefault();

    var name = document.getElementById("stdName").value;
    var grade = document.getElementById("stdClass").value;
    var email = document.getElementById("stdEmail").value;
    var editIdx = Number(editIndexEl.value);

    if (editIdx === -1) {
        // Add New Record
        studentsList.push({ name: name, grade: grade, email: email });
    } else {
        // Update Existing Record
        studentsList[editIdx] = { name: name, grade: grade, email: email };
        editIndexEl.value = -1;
        saveBtnEl.innerText = "Add Student Record";
    }

    document.getElementById("studentForm").reset();
    renderStudentTable();
}

function editStudent(index) {
    var std = studentsList[index];
    document.getElementById("stdName").value = std.name;
    document.getElementById("stdClass").value = std.grade;
    document.getElementById("stdEmail").value = std.email;

    editIndexEl.value = index;
    saveBtnEl.innerText = "Update Student Record";
}

function deleteStudent(index) {
    studentsList.splice(index, 1);
    renderStudentTable();
}

// Initial Table Render on Load
renderStudentTable();
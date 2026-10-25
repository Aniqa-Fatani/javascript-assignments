// Q1: Alert on link click[span_13](start_span)[span_13](end_span)
function showAlertLink(event) {
    event.preventDefault();
    alert("You clicked the link!");
}

// Q2: Mobile Phone Alert[span_14](start_span)[span_14](end_span)[span_15](start_span)[span_15](end_span)
function alertMobile(phoneName) {
    alert("Thanks for purchasing a " + phoneName + " from us!");
}

// Q3: Delete student record row[span_16](start_span)[span_16](end_span)[span_17](start_span)[span_17](end_span)
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Q4: Image hover swap[span_18](start_span)[span_18](end_span)
function changeImage() {
    var img = document.getElementById("hoverImage");
    img.src = "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=300"; // Second image
}

function resetImage() {
    var img = document.getElementById("hoverImage");
    img.src = "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=300"; // Original image
}

// Q5: Counter Logic[span_19](start_span)[span_19](end_span)
var count = 0;

function updateCounterDisplay() {
    document.getElementById("counterValue").innerText = count;
}

function increaseCounter() {
    count++;
    updateCounterDisplay();
}

function decreaseCounter() {
    count--;
    updateCounterDisplay();
}
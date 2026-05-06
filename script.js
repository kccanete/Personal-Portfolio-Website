// Dark Mode Toggle
function darkMode() {
    document.body.classList.toggle("dark-theme");
}

// Welcome Message
function welcomeMessage() {
    alert("Welcome to my personal portfolio website!");
}

// Display Current Date and Time
function displayDate() {

    const today = new Date();

    document.getElementById("date").innerHTML =
    today.toLocaleString();
}

// Contact Form Submission Message
function submitForm() {
    alert("Thank you! Your message has been submitted.");
}

// Image Hover Effect
function imageMessage() {
    alert("Thanks for viewing my travel gallery!");
}

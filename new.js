// Prompt the user to enter their name
const userName = prompt("Please enter your name:");

// Check if the user entered a name
if (userName) {
    // Display a greeting message with the user's name
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    // Display a generic greeting message if no name was entered
    alert("Hello! Welcome to our website.");
}

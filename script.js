document.getElementById('loginForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // Simple validation: Password must be at least 6 characters
    if (password.length < 6) {
        event.preventDefault(); // Stop the form from submitting
        errorMsg.textContent = "Password must be at least 6 characters long.";
        document.getElementById('password').style.borderColor = "#d9534f";
    } else {
        errorMsg.textContent = "";
        alert("Form looks good! Submitting...");
    }
});

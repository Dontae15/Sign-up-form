function adjustOverlay() {
    var img = document.querySelector('#container2 .img');
    var logoBackground = document.querySelector('#container2 .logo-background');

    // Calculate the height of the image and the logo background
    var imgHeight = img.clientHeight;
    var logoBackgroundHeight = imgHeight * 0.15; // 15% of the image height

    // Set the height of the logo background
    logoBackground.style.height = logoBackgroundHeight + 'px';

    // Calculate and set the top property to vertically center the logo background
    var topValue = (imgHeight - logoBackgroundHeight) / 2;
    logoBackground.style.top = topValue + 'px';
}

// Adjust on load and resize
window.onload = adjustOverlay;
window.onresize = adjustOverlay;



function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // Check password strength
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include a number, a capital letter, and a symbol.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
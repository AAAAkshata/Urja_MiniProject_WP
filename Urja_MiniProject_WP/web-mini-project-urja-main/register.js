// JavaScript file

// Function to validate mobile number
function validateMobile() {
    var mobilenumber = document.getElementById("mobile-number").value.trim();
    var mobileError = document.getElementById("mobile-error");

    // Reset previous error message
    mobileError.textContent = "";

    if (mobilenumber !== "" && isNaN(mobilenumber)) {
        mobileError.textContent = "Mobile number should contain only numbers";
    }

    // Check if the mobile number has reached 10 digits
    if (mobilenumber.length >= 10) {
        // Disable further input
        document.getElementById("mobile-number").setAttribute("readonly", "readonly");
    } else {
        // Enable input
        document.getElementById("mobile-number").removeAttribute("readonly");
    }
}

// Function to validate the entire form
function validateForm() {
    var yourname = document.getElementById("yourname").value;
    var nameError = document.getElementById("name-error");
    var mobilenumber = document.getElementById("mobile-number").value.trim();
    var mobileError = document.getElementById("mobile-error");
    var password = document.getElementById("password").value.trim();
    var passwordError = document.getElementById("password-error");

    // Reset previous error messages
    nameError.textContent = "";
    mobileError.textContent = "";
    passwordError.textContent = "";

    var isValid = true;

    if (yourname.trim() === "") {
        nameError.textContent = "Please enter your name";
        isValid = false;
    }

    if (mobilenumber === "") {
        mobileError.textContent = "Please enter your mobile number";
        isValid = false;
    } else if (mobilenumber.length !== 10) {
        mobileError.textContent = "Mobile number should be 10 digits long";
        isValid = false;
    } else if (/[^0-9]/.test(mobilenumber)) {
        mobileError.textContent = "Mobile number should contain only numbers";
        isValid = false;
    }

    if (!/[a-zA-Z]/.test(password) || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
        passwordError.textContent = "Password should contain a combination of letters and symbols";
        isValid = false;
    }

    return isValid;
}
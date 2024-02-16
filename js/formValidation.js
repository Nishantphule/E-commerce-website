function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    var isValid = true;

    // Resetting previous errors
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";

    // Validation for name
    if (name.trim() === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    // Validation for email
    if (email.trim() === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    }

    // Validation for password
    if (password.trim() === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    } else if (!isPasswordValid(password)) {
        passwordError.innerText = "Password must contain both numbers and alphabets";
        isValid = false;
    }

    // Validation for confirm password
    if (confirmPassword.trim() === "") {
        confirmPasswordError.innerText = "Confirm Password is required";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}
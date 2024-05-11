"use strict";

let formEl = document.getElementById("login");

// Function to reset errors
function resetErrors() {
    document.querySelectorAll(".error-text").forEach(el => {
        el.innerText = "";
    });
}

formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    let errors = {};

    let usernameValue = document.getElementById("usernamefield").value;
    if (usernameValue == "") {
        errors.username = "Username value cannot be empty";
    }

    // Regex pattern for password: at least 8 characters, at least one uppercase letter, one lowercase letter, and one number
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    let passw1 = document.getElementById("passwordfield").value;
    let passw2 = document.getElementById("passwordfield2").value;
    if (passw1 == "") {
        errors.passw = "Password value cannot be empty";
    } else if (!passwordPattern.test(passw1)) {
        errors.passw = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    }
    if (passw1 != passw2) {
        errors.passw2 = "Passwords do not match";
    }

    // radio
    let gender = false;
    this.querySelectorAll(".genderinput").forEach(item => {
        if (item.checked) {
            gender = true;
        }
    });

    if (!gender) {
        errors.gender = "Select your gender";
    }

    // checkbox
    let agree = document.getElementById("check").checked;

    if (!agree) {
        errors.agree = "You must agree to the terms and conditions";
    }

    //
    resetErrors();

    //
    for (let item in errors) {
        let errorElement = document.getElementById("error-" + item);
        if (errorElement) {
            errorElement.innerText = errors[item];
        }
    }

    //
    if (Object.keys(errors).length === 0) {
        this.submit();
    }
});

// Add event listener for reset button
formEl.addEventListener("reset", function() {
    resetErrors();
});



//show/hide password
let passw = document.getElementById("passwordfield");
let iconPassw = document.getElementById("icon");

iconPassw.addEventListener("click",function(){
    if(passw.type === "password"){
        passw.setAttribute("type", "text");
        iconPassw.classList.remove("fa-eye");
        iconPassw.classList.add("fa-eye-slash")
    } else {
        passw.setAttribute("type", "password");
        iconPassw.classList.remove("fa-eye-slash")
        iconPassw.classList.add("fa-eye");
    }
})

//email validation
let emailField = document.getElementById("emailField")

export function validationEmail(){
    let emailFieldValue = document.getElementById("emailField").value;
    let emailError = document.getElementById("errorEmail");
    let emailPattern =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailFieldValue.match(emailPattern)){
        emailError.innerText = "Your Email is valid";
        emailError.style.color = "green";
    } else {
        emailError.innerText = "Your Email is Invalid";
        emailError.style.color = "red";
    }

    if (emailFieldValue === ""){
        emailError.innerHTML = "";
    }
}
emailField.addEventListener("keyup",validationEmail);

// Show and hide the form
document.getElementById("joinUs").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    var formContainer = document.getElementById("formContainer");
    if (formContainer.style.display === "none") {
        formContainer.style.display = "block"; 
    } else {
        formContainer.style.display = "none"; 
    }
});

export {formEl}




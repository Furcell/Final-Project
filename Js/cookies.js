"use strict";


export function cookies(){
    document.getElementById("login1").addEventListener("submit",function(e){
        e.preventDefault();

        let chechbox = document.getElementById("save");
        let inputValue = document.getElementById("user").value;

        if(chechbox.checked){
            Cookies.set("cookiesUsername",inputValue);
        } else {
            Cookies.remove("cookiesUsername")
        }
    });

    let savedusernameCookies = Cookies.get("cookiesUsername");
    if(savedusernameCookies){
        document.getElementById("user").value = savedusernameCookies;
        document.getElementById("save").checked = true;
    }
}


document.getElementById("loginBtn").addEventListener("click", function() {
    var loginForm = document.getElementById("login1");
    if (loginForm.classList.contains("hidden-form")) {
        loginForm.classList.remove("hidden-form");
    } else {
        loginForm.classList.add("hidden-form");
    }
});


// cookieBanner
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookiesBtn = document.getElementById('acceptCookies');
const declineCookiesBtn = document.getElementById('declineCookies');
const cookieModal = document.getElementById('cookieModal');
const closeModalBtn = document.getElementsByClassName('close')[0];
const cookieConsentLink = document.getElementById('cookieConsent');


if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'block';
}


acceptCookiesBtn.addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', true);
    cookieBanner.style.display = 'none';
});


declineCookiesBtn.addEventListener('click', function() {
    localStorage.removeItem('cookiesAccepted');
    cookieBanner.style.display = 'none';
    
});


cookieConsentLink.addEventListener('click', function() {
    cookieModal.style.display = 'block';
});


closeModalBtn.addEventListener('click', function() {
    cookieModal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === cookieModal) {
        cookieModal.style.display = 'none';
    }
});

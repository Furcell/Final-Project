"use strict";

// burger-active-navigation
let navigationElement = document.getElementById("nav-bar");
let burgerElement = document.getElementById("burger-bar");

burgerElement.addEventListener( "click", function() {
    burgerElement.classList.toggle("burger-border")
    navigationElement.classList.toggle("activeNav");
});
// burger-active-animation
let burgerActive = document.querySelector(".burger");

burgerActive.addEventListener("click",function(){
    burgerActive.classList.toggle("active");
})

export {burgerActive};

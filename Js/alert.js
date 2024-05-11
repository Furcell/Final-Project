"use strict"

// Home section joinUs alert
let alertButton = document.getElementById("alert-element");
alertButton.addEventListener("click",function () {
    alert("ERROR")
})

export {alertButton};



// orderNow section alert
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("orderButton").addEventListener("click", function() {
      var name = document.getElementById("nameInput").value.trim();
      var mobile = document.getElementById("mobileInput").value.trim();
      
      if (name === "" || mobile === "") {
        alert("Please fill in your name and mobile number.");
        return;
      }
      
      alert("Thank you! We will call you.");
      
      document.getElementById("nameInput").value = "";
      document.getElementById("mobileInput").value = "";
      document.getElementById("messageInput").value = "";
    });
  });
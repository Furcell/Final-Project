"use strict";

// scrollToTopFunctions.js

export function handleScroll() {
    const scrollToTopButton = document.getElementById("scrollToTopBtn");
  
    window.onscroll = function() {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    }
  }
  
  export function scrollToTop() {
    function topFunction() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
    }
    
    return topFunction;
  }

  const scrollToTopButton = document.getElementById("scrollToTopBtn");
  scrollToTopButton.addEventListener("click", scrollToTop());
  
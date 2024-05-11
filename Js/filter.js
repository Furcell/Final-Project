"use strict";

let input = document.getElementById("user");
let showFilterButton = document.getElementById("showFilter");

function filterData(searchItem) {
    let listItems = document.getElementById("result").getElementsByTagName("li");
    Array.from(listItems).forEach(item => {
      if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  }
  
  export { filterData };


input.addEventListener("keyup", function() {
  filterData(this.value);
});

// show/hide filter
showFilterButton.addEventListener("click", function() {
  toggleFilter();
});

function toggleFilter() {
  let listItems = document.getElementById("result").getElementsByTagName("li");
  Array.from(listItems).forEach(item => {
    item.classList.toggle("active");
  });
}

document.getElementById("result").addEventListener("click", function(event) {
  if (event.target.tagName === 'LI') {
    input.value = event.target.innerText;
  }
});



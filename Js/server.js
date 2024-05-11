"use strict";

// get server data by axios

async function getUser() {
  let ulElement = document.getElementById("result");
  let listItems = [];
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    response.data.forEach(el => {
      let li = document.createElement("li");
      li.innerText = `${el.username}`;

      listItems.push(li)
      ulElement.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}

export { getUser };
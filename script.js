// 1. Find the things on the page we need
const createButton = document.getElementById("create-button");
const groupNameInput = document.getElementById("group-name");
const groupList = document.getElementById("group-list");

// 2. Say what should happen when the button is clicked
createButton.addEventListener("click", function () {
  // 3. Read what the user typed
  const name = groupNameInput.value.trim();

  // 4. If the box is empty, stop here
  if (name === "") {
    alert("Type a group name first");
    return;
  }

  // 5. Make a new list item and put it on the page
  const newItem = document.createElement("li");

  const nameText = document.createElement("span");
  nameText.textContent = name;

  const statusText = document.createElement("span");
  statusText.textContent = "no expenses yet";
  statusText.className = "settled";

  newItem.appendChild(nameText);
  newItem.appendChild(statusText);
  groupList.appendChild(newItem);

  // 6. Empty the text box for the next one
  groupNameInput.value = "";
});

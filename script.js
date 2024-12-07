const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") return;

  const listItem = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = taskValue;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(taskText);
  listItem.appendChild(removeButton);

  taskList.appendChild(listItem);

  taskInput.value = "";
});

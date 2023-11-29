// Loads tasks from local storage
document.addEventListener('DOMContentLoaded', function () {
 loadTasks();
});

// Adds tasks when press enter key
function addTaskOnEnter(event) {
 if (event.key === 'Enter') {
  addTask();
 }
}

// Add task to the list and save it in local storage
function addTask() {
 let taskInput = document.getElementById('taskInput');
 let taskList = document.getElementById('taskList');

 if (taskInput.value.trim() !== '') {
  let li = document.createElement('li');
  li.innerHTML = `
   <span>${taskInput.value}</span>
   <button onclick="removeTask(this)"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button> 
  `;
  taskList.appendChild(li);
  taskInput.value = '';

  saveTasks();
 }
}

// Delete task function
function removeTask(button) {
 let taskList = document.getElementById('taskList');
 let li = button.parentNode;
 taskList.removeChild(li);

 // Saves to local storage
 saveTasks();
}

// Load tasks from local storage
function loadTasks() {
 let taskList = document.getElementById('taskList');
 let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

 taskList.innerHTML = '';

 tasks.forEach(function (taskText) {
  let li = document.createElement('li');
  li.innerHTML = `
   <span>${taskText}</span>
   <button onclick="removeTask(this)"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
  `;
  taskList.appendChild(li);
 });
}

// Save tasks to local storage
function saveTasks() {
 let taskList = document.getElementById('taskList');
 let tasks = [];

 taskList.querySelectorAll('li span').forEach(function (task) {
  tasks.push(task.textContent);
 });

 localStorage.setItem('tasks', JSON.stringify(tasks));
}

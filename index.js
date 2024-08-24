document.addEventListener('DOMContentLoaded', function() {
    const addTitleBtn = document.getElementById('addTitleBtn');
    addTitleBtn.addEventListener('click', addTitle);
});

function addTitle() {
    const taskList = document.getElementById("taskList");
    const inputTitle = document.getElementById("inputTitle");

    if (inputTitle.value === "") {
        alert("Title cannot be empty");
        return;
    }

    const titleContainer = document.createElement("div");
    titleContainer.className = 'titleContainer';

    const titleElement = document.createElement("h3");
    titleElement.className = 'taskTitle';
    titleElement.textContent = inputTitle.value;

    const taskInput = document.createElement("input");
    taskInput.type = 'text';
    taskInput.placeholder = 'Add a task';

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = 'Add Task';
    addTaskButton.onclick = function() { addTask(titleContainer); };

    titleContainer.appendChild(titleElement);
    titleContainer.appendChild(taskInput);
    titleContainer.appendChild(addTaskButton);

    taskList.appendChild(titleContainer);
    inputTitle.value = "";
}

function addTask(titleContainer) {
    const taskInput = titleContainer.querySelector('input[type="text"]');
    
    if (taskInput.value === "") {
        alert("Task cannot be empty");
        return;
    }

    const taskContainer = document.createElement("div");
    taskContainer.className = 'taskContainer';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createElement("input");
    taskText.type = 'text';
    taskText.value = taskInput.value;
    taskText.readOnly = true;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'deleteButton';

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(deleteButton);

    titleContainer.insertBefore(taskContainer, taskInput);
    taskInput.value = "";

    checkbox.onchange = function() {
        if (this.checked) {
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "hsl(0, 0%, 45%)";
        } else {
            taskText.style.textDecoration = "none";
            taskText.style.color = "#333";
        }
    };

    deleteButton.onclick = function() {
        taskContainer.remove();
    };
}
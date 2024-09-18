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

    const titleHeader = document.createElement("div");
    titleHeader.className = 'titleHeader';
    
    const titleElement = document.createElement("h3");
    titleElement.className = 'taskTitle';
    titleElement.textContent = inputTitle.value;

    const delete_ = document.createElement('button');
    delete_.textContent = 'X';
    delete_.className = 'delete';
    delete_.style.position= 'absolute';
    delete_.style.top='10px';
    delete_.style.right='10px';
    delete_.style.padding='0';
    delete_.style.marginLeft = '10px';
    delete_.style.borderRadius = "60%";
    delete_.style.border = "none";
    delete_.style.background = "red";
    delete_.style.color = "white";
    delete_.style.width = "20px";
    delete_.style.height = "20px";
    delete_.style.cursor = "pointer";
    delete_.style.display="flex";
    delete_.style.justifyContent="center";
    delete_.style.alignItems="center";
    delete_.style.fontSize='12px'
    delete_.onclick = function() { 
        titleContainer.remove(); 
    };

    const taskListContainer = document.createElement("div");
    taskListContainer.className = 'taskListContainer';

    const taskInput = document.createElement("input");
    taskInput.type = 'text';
    taskInput.placeholder = 'Add a task';

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = 'Add Task';
    addTaskButton.onclick = function() { addTask(taskListContainer, taskInput); 
    };

    titleContainer.appendChild(titleElement);
    titleContainer.appendChild(delete_);
    titleContainer.appendChild(taskListContainer);
    titleContainer.appendChild(taskInput);
    titleContainer.appendChild(addTaskButton);

    taskList.appendChild(titleContainer);
    inputTitle.value = "";
}

function addTask(taskListContainer,taskInput) {
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
    deleteButton.style.padding = '0';
    deleteButton.style.marginLeft = '10px';
    deleteButton.style.borderRadius = "60%";
    deleteButton.style.border = "none";
    deleteButton.style.background = "red";
    deleteButton.style.color = "white";
    deleteButton.style.width = "30px";
    deleteButton.style.height = "30px";
    deleteButton.style.cursor = "pointer";
    
    // Center the 'X'
    deleteButton.style.textAlign = "center";
    deleteButton.style.lineHeight = "30px";
    deleteButton.style.display = "inline-block";
    

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(deleteButton);

    taskListContainer.appendChild(taskContainer);
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
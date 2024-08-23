function addtask(value) {
    const tasklist = document.getElementById("tasklist");
    const inputtasks = document.getElementById("inputtasks").value;

    if (inputtasks === "") {
        alert("Task cannot be empty");
        return;
    }

    const taskContainer = document.createElement("div");
    taskContainer.className = 'taskContainer';
    
    const inputtext = document.createElement("input");
    const radioButton = document.createElement('input');
    const deleteButton = document.createElement('button');

    taskContainer.style.display = 'flex';
    taskContainer.style.alignItems = 'center';
    taskContainer.style.marginBottom = '20px';
    taskContainer.style.marginRight= '30px';
    taskContainer.style.padding = '10px';
    taskContainer.style.backgroundColor = '#ffffff';
    taskContainer.style.borderRadius = '4px';
    taskContainer.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';

    inputtext.type = 'text';
    inputtext.value = inputtasks;
    inputtext.readOnly = true;
    inputtext.style.flexGrow = '1';
    inputtext.style.border = 'none';
    inputtext.style.backgroundColor = 'transparent';
    inputtext.style.fontSize = '20px';
    inputtext.style.color = '#333';

    radioButton.type = 'checkbox';
    radioButton.value = value;
    radioButton.style.marginRight = '10px';
    radioButton.style.cursor = 'pointer';

    deleteButton.type = 'button';
    deleteButton.textContent = 'X';
    deleteButton.style.marginLeft = '10px';
    deleteButton.style.borderRadius = "50%";
    deleteButton.style.border = "none";
    deleteButton.style.background = "red";
    deleteButton.style.color = "white";
    deleteButton.style.width = "24px";
    deleteButton.style.height = "24px";
    deleteButton.style.cursor = "pointer";

    tasklist.appendChild(taskContainer);
    taskContainer.appendChild(radioButton);
    taskContainer.appendChild(inputtext);
    taskContainer.appendChild(deleteButton);
    document.getElementById("inputtasks").value = "";

    radioButton.onchange = function() {
        if (this.checked) {
            inputtext.style.textDecoration = "line-through";
            inputtext.style.textDecorationColor = "hsl(0, 0%, 35%)";
            inputtext.style.color = "hsl(0, 0%, 45%)";
        } else {
            inputtext.style.textDecoration = "none";
            inputtext.style.color = "#333";
        }
    };

    deleteButton.onclick = function() {
        taskContainer.remove();
        console.log('5'== 5);
        console.log('5'=== 5);
    };
}

function addtask(value){
    const tasklist = document.getElementById("tasklist");
    const taskContainer = document.createElement("div");
    const inputtext = document.createElement("inputtext");
    const radioButton = document.createElement('input');
    const deleteButton = document.createElement('button');
    const lineBreak = document.createElement('br');
    const inputtasks= document.getElementById("inputtasks").value;
    if (inputtasks === "") {
        alert("Task cannot be empty");
        return;
    }
    deleteButton.type='text';
    deleteButton.style.marginLeft = '10px';
    deleteButton.textContent = 'X';
    radioButton.type = 'checkbox';
    radioButton.value = value;
    deleteButton.style.borderRadius="50%";
    deleteButton.style.border="none";
    deleteButton.style.background="transparent";
    deleteButton.style.textAlign="right";
    inputtext.textContent = inputtasks;
    tasklist.appendChild(taskContainer);
    taskContainer.appendChild(radioButton);
    taskContainer.appendChild(inputtext);
    taskContainer.appendChild(deleteButton);
    taskContainer.appendChild(lineBreak);
    taskContainer.appendChild(lineBreak);
    radioButton.onchange = function() {
        if (this.checked) {
        inputtext.style.textDecoration = "line-through";
        inputtext.style.textDecorationColor = "hsl(0, 0%, 35%)";
        inputtext.style.color="hsl(0, 0%, 45%)"

        }
        else {  //Changed to else
            inputtext.style.textDecoration = "none";
        }
    };
deleteButton.onclick= function(){
    taskContainer.remove();
    };
}


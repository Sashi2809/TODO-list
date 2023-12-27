function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.style.textDecoration = "line-through";
    button.remove();
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
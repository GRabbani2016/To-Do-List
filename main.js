

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const cmTaskList = document.getElementById("completeTaskList");


addTaskBtn.addEventListener("click", () => {

    const taskText =  taskInput.value.trim();

    if(taskText !== ""){
        addTask(taskText);
        taskInput.value = ""; 
    }

})

const addTask = (taskText) => {

    var li = document.createElement("li");
    li.textContent = taskText;

    var checkBx = document.createElement("input");
        checkBx.type = "checkbox";
        checkBx.className = "complited";
        checkBx.name = "checkbox";
        checkBx.value = "Male";

        const check1 = document.getElementsByClassName("complited");

        checkBx.addEventListener("click", () =>{
            checkBx.style.display = "none";
            cmTaskList.appendChild(li);
        })

    var deleteBtn = document.createElement("button");
        deleteBtn.className = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            li.remove();
        })

        taskList.appendChild(li)
        li.appendChild(checkBx);
        li.appendChild(deleteBtn);

       

}
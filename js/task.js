let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

if(tasks != null && tasks.length > 0){
    tasks.forEach(element => {
        AddTaskToHTMLList(element)
    });
}

function RemoveTask(id){
    tasks = tasks.filter(task => task.id !== id)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function AddTask(taskString){
    const id = tasks != undefined && tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
    const newTask = {
        id: id,
        task: taskString,
        isComplete: false
    }
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks))

    AddTaskToHTMLList(newTask)
}

function AddTaskToHTMLList(newTask){
    const taskList = document.getElementById("task-list")

    const newListItem = document.createElement('li')
    const newListItemRemoveBtn = document.createElement('button')
    newListItem.innerText = newTask.task
    newListItemRemoveBtn.innerText = "Complete"
    newListItem.appendChild(newListItemRemoveBtn)
    taskList.appendChild(newListItem)

    newListItemRemoveBtn.addEventListener('click', function(){
        RemoveTask(newTask.id)
        newListItem.remove()
    })
}

const addTaskBtn = document.getElementById("taskAddBtn")
addTaskBtn.addEventListener('click', function(){
    let taskString = document.getElementById("new-task").value
    AddTask(taskString)
    document.getElementById("new-task").value = ""
})
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

    const newCardItem = document.createElement('div')
    newCardItem.classList = "card col-10 mb-2 mr-2 ms-2"

    const innerCardDiv = document.createElement('div')
    innerCardDiv.classList = "row p-2 d-flex align-items-center"

    const newTaskCardBody = document.createElement("div")
    newTaskCardBody.classList = "card-body"

    const newTaskTitle = document.createElement("h5")
    newTaskTitle.innerText = newTask.task
    newTaskTitle.classList = "card-title col text-center"

    const newTaskDateSubtitle = document.createElement("h6")
    newTaskDateSubtitle.classList = "text-center  col card-subtitle mb-2 text-muted"
    newTaskDateSubtitle.innerText = "1/01/1999" //PLACEHOLDER FOR NOW :)

    const newTaskCardCompleteBtn = document.createElement('a')
    newTaskCardCompleteBtn.innerText = "Mark Complete"
    newTaskCardCompleteBtn.classList = "card-link col btn btn-outline-success mr-1"
    newTaskCardCompleteBtn.addEventListener('click', function(){
        MarkTaskComplete(newTask.id, true, newCardItem)
    })

    const newTaskCardAbandonBtn = document.createElement('a')
    newTaskCardAbandonBtn.innerText = "Abandon"
    newTaskCardAbandonBtn.classList = "card-link col btn btn-outline-danger"
    newTaskCardAbandonBtn.addEventListener('click', function(){
        MarkTaskComplete(newTask.id, false, newCardItem)
    })
    newCardItem.appendChild(innerCardDiv)
    innerCardDiv.appendChild(newTaskDateSubtitle)
    innerCardDiv.appendChild(newTaskTitle)
    
    //innerCardDiv.appendChild(newTaskCardBody)
    innerCardDiv.appendChild(newTaskCardCompleteBtn)
    innerCardDiv.appendChild(newTaskCardAbandonBtn)
    

    taskList.appendChild(newCardItem)
}

const addTaskBtn = document.getElementById("taskAddBtn")
addTaskBtn.addEventListener('click', function(){
    let taskString = document.getElementById("new-task").value
    AddTask(taskString)
    document.getElementById("new-task").value = ""
})

function MarkTaskComplete(taskId ,isComplete, newCardItem){
    const saveChangesBtn = document.getElementById("saveChangesBtn")
    saveChangesBtn.onclick = function (){
        ConfirmMarkTaskComplete(taskId, isComplete, newCardItem)
    }
    var myModal = new bootstrap.Modal(document.getElementById("myModal"), {
        keyboard: true,
        focus: true
    });
    myModal.show();
    
}

function ConfirmMarkTaskComplete(taskId, isComplete, newCardItem){
    let selectedStat = document.querySelector('input[name="stat"]:checked');
    let increment = isComplete ? 10: -10;
    let newVal = 0
    if(selectedStat){
        switch(selectedStat.value){
            case "1":
                newVal = parseInt(localStorage.getItem("petHealth")) + increment
                if(newVal > 100){
                    newVal = 100;
                }
                else if(newVal < 0){
                    newVal = 0
                }
                localStorage.setItem("petHealth", newVal)
                break;
            case "2":
                newVal = parseInt(localStorage.getItem("petHappiness")) + increment
                if(newVal > 100){
                    newVal = 100;
                }
                else if(newVal < 0){
                    newVal = 0
                }
                localStorage.setItem("petHappiness", newVal)
                break;
            case "3":
                newVal = parseInt(localStorage.getItem("petStress")) + increment
                if(newVal > 100){
                    newVal = 100;
                }
                else if(newVal < 0){
                    newVal = 0
                }
                localStorage.setItem("petStress", newVal)
                break;
            case "4":
                newVal = parseInt(localStorage.getItem("petTraining")) + increment
                if(newVal > 100){
                    newVal = 100;
                }
                else if(newVal < 0){
                    newVal = 0
                }
                localStorage.setItem("petTraining", newVal)
                break;
        }
        UpdateStatusBars()
    }else{
        console.log("ERROR HERE")
    }
    RemoveTask(taskId)
    newCardItem.remove()
}
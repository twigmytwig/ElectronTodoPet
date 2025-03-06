//initialization
init()
UpdateStatusBars()

//adding click to initiate name change
const nameChangeBtn = document.getElementById("changePetNameBtn")
const nameSaveBtn = document.getElementById("savePetNameBtn")
const nameInput = document.getElementById("petNameInput")
const nameDisplay = document.getElementById("petName")
nameChangeBtn.addEventListener('click', function(){
    nameChangeBtn.classList.add('d-none')
    nameDisplay.classList.add('d-none')
    nameInput.value = nameDisplay.innerText
    nameInput.classList.remove('d-none')
    nameSaveBtn.classList.remove('d-none')
})

//initiate saving new name
nameSaveBtn.addEventListener('click', function(){
    localStorage.setItem('petInfo', nameInput.value)
    nameDisplay.innerText = nameInput.value
    nameChangeBtn.classList.remove('d-none')
    nameDisplay.classList.remove('d-none')
    nameInput.classList.add('d-none')
    nameSaveBtn.classList.add('d-none')
})

function UpdateStatusBars(){
    updateHealth(localStorage.getItem("petHealth"))
    updateHappiness(localStorage.getItem("petHappiness"))
    updateStress(localStorage.getItem("petStress"))
    updateTraining(localStorage.getItem("petTraining"))
}

function init(){
    const test = localStorage.getItem("petStress")
    if(localStorage.getItem("petInfo") != undefined){
        document.getElementById("petName").innerHTML = localStorage.getItem("petInfo")
    }
    else{
        document.getElementById("petName").innerText = "No pet created!"
        localStorage.setItem("petInfo", "ling-ling")
    }

    if(localStorage.getItem("petHealth") === undefined || localStorage.getItem("petHealth") == null){
        localStorage.setItem("petHealth", 100)
    }
    if(localStorage.getItem("petHappiness") === undefined || localStorage.getItem("petHappiness") == null){
        localStorage.setItem("petHappiness", 100)
    }
    if(localStorage.getItem("petStress") === undefined || localStorage.getItem("petStress") == null){
        localStorage.setItem("petStress", 100)
    }
    if(localStorage.getItem("petTraining") === undefined || localStorage.getItem("petTraining") == null){
        localStorage.setItem("petTraining", 100)
    }
}
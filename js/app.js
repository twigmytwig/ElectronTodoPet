//initialization
if(localStorage.getItem("petInfo") != undefined){
    document.getElementById("petName").innerHTML = localStorage.getItem("petInfo")
}
else{
    document.getElementById("petName").innerText = "No pet created!"
    localStorage.setItem("petInfo", "ling-ling")
}

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

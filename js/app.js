
if(localStorage.getItem("petInfo") != undefined){
    document.getElementById("petName").innerHTML = localStorage.getItem("petInfo")
}
else{
    document.getElementById("petName").innerText = "No pet created!"
    localStorage.setItem("petInfo", "ling-ling")
}
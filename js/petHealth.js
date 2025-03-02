function updateHealth(healthPercentage) {
    const healthBar = document.getElementById("healthBar");
    healthBar.style.width = healthPercentage + "%";

    // Change color based on health level
    if (healthPercentage > 70) {
        healthBar.classList.remove("bg-warning", "bg-danger");
        healthBar.classList.add("bg-success");
    } else if (healthPercentage > 30) {
        healthBar.classList.remove("bg-success", "bg-danger");
        healthBar.classList.add("bg-warning");
    } else {
        healthBar.classList.remove("bg-success", "bg-warning");
        healthBar.classList.add("bg-danger");
    }
}
function updateHappiness(percentage) {
    const healthBar = document.getElementById("happinessBar");
    healthBar.style.width = percentage + "%";

    // Change color based on health level
    if (percentage > 70) {
        healthBar.classList.remove("bg-warning", "bg-danger");
        healthBar.classList.add("bg-success");
    } else if (percentage > 30) {
        healthBar.classList.remove("bg-success", "bg-danger");
        healthBar.classList.add("bg-warning");
    } else {
        healthBar.classList.remove("bg-success", "bg-warning");
        healthBar.classList.add("bg-danger");
    }
}
function updateStress(percentage) {
    const healthBar = document.getElementById("stressBar");
    healthBar.style.width = percentage + "%";

    // Change color based on health level
    if (percentage > 70) {
        healthBar.classList.remove("bg-warning", "bg-danger");
        healthBar.classList.add("bg-success");
    } else if (percentage > 30) {
        healthBar.classList.remove("bg-success", "bg-danger");
        healthBar.classList.add("bg-warning");
    } else {
        healthBar.classList.remove("bg-success", "bg-warning");
        healthBar.classList.add("bg-danger");
    }
}

function updateTraining(percentage) {
    const healthBar = document.getElementById("trainingBar");
    healthBar.style.width = percentage + "%";

    // Change color based on health level
    if (percentage > 70) {
        healthBar.classList.remove("bg-warning", "bg-danger");
        healthBar.classList.add("bg-success");
    } else if (percentage > 30) {
        healthBar.classList.remove("bg-success", "bg-danger");
        healthBar.classList.add("bg-warning");
    } else {
        healthBar.classList.remove("bg-success", "bg-warning");
        healthBar.classList.add("bg-danger");
    }
}

// Example: Set health to 50%
updateHealth(80);
updateHappiness(50);
updateTraining(40);
updateStress(20);

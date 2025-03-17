// count visit time

if (localStorage.getItem("visitCount")) {
    let count = parseInt(localStorage.getItem("visitCount")) + 1;
    localStorage.setItem("visitCount", count);
    document.getElementById("visitCount").textContent = count;
} else {
    localStorage.setItem("visitCount", 1);
    document.getElementById("visitCount").textContent = 1;
}
setTimeout(function () {
    document.querySelector(".header").style.display = "none";
}, 5000);

// remove count visit time

setTimeout(function () {
    let header = document.querySelector(".header");
    let opacity = 1;
    let fadeOut = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(fadeOut);
            header.style.display = "none";
        }
        header.style.opacity = opacity;
        opacity -= 3; 
    }, 5000); 
}, 5000);


// count followers
function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = range / (duration / 5);
    let timer = setInterval(() => {
        current += increment;
        obj.textContent = Math.round(current);
        if (current >= end) {
            clearInterval(timer);
            obj.textContent = end;
        }
    }, 10);
}
animateCounter("followerCount", 0, 5000, 5000);


// saving username so it can be displayed next visit

const saveNameButton = document.getElementById("saveNameButton");
const userNameInput = document.getElementById("userNameInput");
const userNameDisplay = document.getElementById("userName");

if (localStorage.getItem("userName")) {
    userNameDisplay.textContent = localStorage.getItem("userName");
} else {
    userNameDisplay.textContent = "Guest";
}


saveNameButton.addEventListener("click", function () {
    const userName = userNameInput.value.trim();
    if (userName) {
        localStorage.setItem("userName", userName);
        userNameDisplay.textContent = userName;
    } else {
        alert("Please enter a valid name!");
    }
});
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

// sticky main nav bar

document.addEventListener('DOMContentLoaded', function() {
    const topNav = document.querySelector('.top-nav');
    const mainNav = document.querySelector('.main-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const topNavHeight = topNav.offsetHeight;
        
        if (scrollTop > lastScrollTop && scrollTop > topNavHeight) {
            mainNav.style.top = '0';
        }
        else if (scrollTop < lastScrollTop && scrollTop <= topNavHeight) {
            mainNav.style.top = topNavHeight + 'px';
        }
        
        lastScrollTop = scrollTop;
    });
    
    const initialScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (initialScrollTop <= topNav.offsetHeight) {
        mainNav.style.top = topNav.offsetHeight + 'px';
    }
});


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
animateCounter("followerCount", 0, 5000, 10000);


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
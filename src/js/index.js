const body = document.querySelector("body");
const menuOpenBtn = document.querySelector(".menu-open-btn");
const mainNav = document.querySelector('.main-nav')
const menuCloseBtn = document.querySelector(".menu-close-btn");

menuOpenBtn.addEventListener("click", function(){
    mainNav.classList.add("active");
    body.classList.add("overflow");
});

menuCloseBtn.addEventListener("click", function(){
    mainNav.classList.remove("active");
    body.classList.remove("overflow");
});
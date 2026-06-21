window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#000";
    } else {
        header.style.background = "rgba(0,0,0,0.85)";
    }

});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const overlayMenu = document.getElementById("overlayMenu");

function openMenu(){

    document.body.classList.add("menu-open");

    menuToggle.classList.add("active");
    navMenu.classList.add("active");
    overlayMenu.classList.add("active");

}

function closeMenu(){

    document.body.classList.remove("menu-open");

    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    overlayMenu.classList.remove("active");

}

menuToggle.addEventListener("click", () => {

    if(navMenu.classList.contains("active")){
        closeMenu();
    }else{
        openMenu();
    }

});

overlayMenu.addEventListener("click", closeMenu);

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});
const header = document.querySelector('header');

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        header.style.backgroundColor = "#181818";
    } else {
        header.style.backgroundColor = "transparent";
    }
})
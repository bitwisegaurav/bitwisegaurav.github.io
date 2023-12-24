const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const links = navbar.querySelectorAll('.links a');

hamburger.addEventListener('click', () => {
    console.log('clicked');
    let opened = hamburger.querySelector('button').classList.contains('opened');
    navbar.style.display = opened ? "block" : "none";
})

links.forEach(link => {
    link.addEventListener("click", () => {
        // click the hamburge button
        // hamburger.click();
        hamburger.querySelector('button').click();
    })
});
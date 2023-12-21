const header = document.querySelector('header');
let nameturn = false; // false means username and true means real name
let text = nameturn ? "Gaurav Mishra" : "BitwiseGaurav";
let index = 0;
let timeouts = null;

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        header.style.backgroundColor = "#181818";
    } else {
        header.style.backgroundColor = "transparent";
    }
})

function changeName() {
    let name = nameturn ? "Gaurav Mishra" : "BitwiseGaurav";
    document.getElementById('introName').textContent = name;
    nameturn = !nameturn;
    timeouts = setTimeout(changeName, 6000);
}
changeName();
let nameturn = false; // false means username and true means real name
let text = nameturn ? "Gaurav Mishra" : "BitwiseGaurav";
let index = 0;
let timeouts = null;
const userBox = document.querySelector('user');

function changeName() {
    let name = nameturn ? "Gaurav Mishra" : "BitwiseGaurav";
    let username = nameturn ? "" : "User";
    document.getElementById('introName').textContent = name;
    userBox.textContent = username;
    nameturn = !nameturn;
    timeouts = setTimeout(changeName, 6000);
}
changeName();
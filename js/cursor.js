const cursor = document.getElementById('cursor');
const largeCursorBoxes = document.querySelectorAll('.largecursor');
const cursorColorBoxes = document.querySelectorAll('.cursorcolor');
let mouseLightColor = "#FFE74C", mouseDarkColor = "#968200";

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})
window.addEventListener('scroll', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})

largeCursorBoxes.forEach(box => {
    box.addEventListener('mouseenter', (e) => {
        cursor.style.width = "3rem";
    })
    box.addEventListener('mouseleave', (e) => {
        cursor.style.width = "1rem";
    })
})

cursorColorBoxes.forEach(box => {
    box.addEventListener('mouseenter', (e) => {
        cursor.style.borderColor = mouseDarkColor;
    })
    box.addEventListener('mouseleave', (e) => {
        cursor.style.borderColor = mouseLightColor;
    })
})
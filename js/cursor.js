const cursor = document.getElementById('cursor');
const largeCursorBoxes = document.querySelectorAll('.largecursor');
const cursorColorBoxes = document.querySelectorAll('.cursorcolor');

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
        cursor.style.borderColor = "#968200";
    })
    box.addEventListener('mouseleave', (e) => {
        cursor.style.borderColor = "#FFE74C";
    })
})
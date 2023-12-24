const scrollTrigger = document.querySelector('.scrollTrigger');
const projectOuterBox = document.querySelector('.projects-outerBox');

window.addEventListener("scroll", (e) => {
    const scrollTriggerHeight = scrollTrigger.getBoundingClientRect().top;
    const projectOuterBoxHeight = projectOuterBox.getBoundingClientRect().top;
    if (scrollTriggerHeight >= projectOuterBoxHeight) {
        setTimeout(() => {
            projectOuterBox.querySelector('ul').style.opacity = "1";
        }, 2000);
        projectOuterBox.querySelector('ul').style.animationName = "fadeUp";
    }
})
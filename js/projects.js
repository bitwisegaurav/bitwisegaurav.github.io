const projects = document.querySelectorAll('.projects-outerBox a');

projects.forEach(project => {
    // project.addEventListener('mouseenter', (e) => {
        const projectImageBox = document.createElement('div');
        projectImageBox.classList.add("project-box");
        const projectName = project.querySelector('p').innerText;
        projectImageBox.innerHTML = `<img src="images/${projectName.toLowerCase()}.png" alt="${projectName}">`;
        project.insertAdjacentElement("beforeend", projectImageBox);
    // })
})

window.addEventListener("mousemove", (e) => {
    const projectImageBoxs = document.querySelectorAll(".project-box");

    const xoffset = window.innerWidth > 800 ? 100 : 60;
    const yoffset = xoffset;
    projectImageBoxs.forEach(projectImageBox => {
        const projectImageBoxWidth = projectImageBox.clientWidth;
        const projectImageBoxHeight = projectImageBox.clientHeight;
        const projectImageBoxDetails = projectImageBox.getBoundingClientRect();

        // Get the window width and height
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calculate the position of the project image box
        let top = e.clientY - yoffset;
        let left = e.clientX + yoffset;

        // Check if the project image box is too close to the top or left of the screen
        if (top < 120) {
            top = 120;
        }

        // if(top + 2*yoffset > windowHeight - 100){
        //     top = top - projectImageBoxHeight + yoffset;
        // }
        projectImageBox.style.top = top + "px";

        // Check if the project image box is too close to the bottom or right of the screen
        if (left + projectImageBoxWidth > windowWidth) {
            left = left - projectImageBoxWidth - 2*xoffset;
        }
        projectImageBox.style.left = left + "px";

    })
})
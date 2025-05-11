const projectsBox = document.querySelector('.projects-outerBox');
const projects = document.querySelectorAll('.projects-outerBox a');
const projectsData = [
    {
        title: "Jam Nation",
        url: "https://play.google.com/store/apps/details?id=com.jamnation.app&pli=1",
        techs: ["Expo", "React Native", "Appsflyer"],
    },
    {
        title: "MoonWalk",
        url: null,
        techs: ["Expo", "React Native", "Typescript", "Firebase", "AppleHealthKit"],
    },
    {
        title: "Grabky",
        url: null,
        techs: ["Expo", "React Native", "Typescript", "Tanstack query"],
    },
    {
        title: "Xguard",
        url: null,
        techs: ["React Native", "Typescript", "Stripe"],
    },
    {
        title: "On Demand Services",
        url: null,
        techs: ["React Native", "Typescript", "Stripe"],
    },
    {
        title: "Weather App",
        url: null,
        techs: ["Expo", "React Native"],
    },
];

(function () {
    let projectsContent = '';
    projectsData.forEach(project => {
        projectsContent += `<li>
            <a href="${project.url ? project.url : 'working.html'}" class="largecursor cursorcolor">
                <p>${project.title}</p>
                <div class="project-technologies">
                    ${project.techs.map(tech => {
            return `<span>${tech}</span>`;
        }).join('')
            }
                </div>
                <div class="project-box">
                    <img src="images/${project.title.toLowerCase().replaceAll(" ", "")}.png" alt="${project.title}">
                </div>
            </a>
        </li>`
    })
    projectsBox.querySelector('ul').innerHTML = projectsContent;
    // console.log(projectsContent);
})();

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
        let bottom = e.clientY + yoffset;

        // Check if the project image box is too close to the top or left of the screen
        if (top < 120) {
            top = 120;
        }

        if (bottom > windowHeight - 100) {
            top = top - projectImageBoxHeight + yoffset;
        }
        // if(top + 2*yoffset > windowHeight - 100){
        //     top = top - projectImageBoxHeight + yoffset;
        // }
        projectImageBox.style.top = top + "px";

        // Check if the project image box is too close to the bottom or right of the screen
        if (left + projectImageBoxWidth > windowWidth) {
            left = left - projectImageBoxWidth - 2 * xoffset;
        }
        projectImageBox.style.left = left + "px";

    })
})

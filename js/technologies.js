const technologyBox = document.querySelector('.technologies');
const technologies = [
    {name : "html", backgroundColor: "#FB4D29", color: "#eee",},
    {name : "css", backgroundColor: "rgb(1,119,189)", color: "#eee",},
    {name : "javascript", backgroundColor: "rgb(255,225,58)", color: "#181818",},
    {name : "tailwind", backgroundColor: "#40B1AB", color: "#eee",},
    {name : "sass", backgroundColor: "#E967B0", color: "#eee",},
    {name : "scss", backgroundColor: "#E967B0", color: "#eee",},
    {name : "react", backgroundColor: "#087EA4", color: "#eee",},
    {name : "typescript", backgroundColor: "#2A7CC7", color: "#eee",},
    {name : "php", backgroundColor: "#777BB3", color: "#eee",},
    {name : "node js", backgroundColor: "#417B36", color: "#eee",},
    {name : "express js", backgroundColor: "#eee", color: "#181818",},
    {name : "socket io", backgroundColor: "#eee", color: "#181818",},
    {name : "c", backgroundColor: "#02599C", color: "#eee",},
    {name : "c++", backgroundColor: "#02599C", color: "#eee",},
    {name : "java", backgroundColor: "#EC3C26", color: "#eee",},
    {name : "git", backgroundColor: "#eee", color: "#181818",},
    {name : "github", backgroundColor: "#eee", color: "#181818",},
]

technologies.forEach(tech => {
    const techBox = document.createElement('div');
    techBox.classList.add('tech');
    techBox.innerText = tech.name;
    techBox.addEventListener("mouseover", () => {
        techBox.style.background = tech.backgroundColor;
        techBox.style.color = tech.color;
        techBox.style.borderColor = "transparent";
    })
    technologyBox.appendChild(techBox);
})
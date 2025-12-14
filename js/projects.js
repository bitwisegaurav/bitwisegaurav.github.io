const projectsBox = document.querySelector('.projects-outerBox');
const projects = document.querySelectorAll('.projects-outerBox a');
const projectsData = [
	{
		title: 'Jam Nation',
		url: 'https://play.google.com/store/apps/details?id=com.jamnation.app&pli=1',
		techs: ['Expo', 'React Native', 'Appsflyer'],
	},
	{
		title: 'MoonWalk',
		url: 'https://apps.apple.com/ch/app/moonwalk/id6743747397',
		techs: [
			'Expo',
			'React Native',
			'Typescript',
			'Firebase',
			'AppleHealthKit',
		],
	},
	{
		title: 'The Short Film Show',
		url: 'https://play.google.com/store/apps/details?id=com.shortfilmshow.app',
		techs: ['Expo', 'React Native', 'Typescript', 'Tanstack query'],
	},
	{
		title: 'Xguard',
		url: 'https://play.google.com/store/apps/details?id=com.xguard.app',
		techs: ['React Native', 'Typescript', 'Stripe'],
	},
];

(function () {
	let projectsContent = '';
	projectsData.forEach((project) => {
		projectsContent += `<li>
            <a href="${'description.html'
			}" class="largecursor cursorcolor">
                <p>${project.title}</p>
                <div class="project-technologies">
                    ${project.techs
				.map((tech) => {
					return `<span>${tech}</span>`;
				})
				.join('')}
                </div>
                <div class="project-box">
                    <img src="images/${project.title
				.toLowerCase()
				.replaceAll(' ', '')}.png" alt="${project.title}">
                </div>
            </a>
        </li>`;
	});
	projectsBox.querySelector('ul').innerHTML = projectsContent;
	// console.log(projectsContent);
})();

window.addEventListener('mousemove', (e) => {
	const projectImageBoxs = document.querySelectorAll('.project-box');

	const xoffset = window.innerWidth > 800 ? 100 : 60;
	const yoffset = 100;
	projectImageBoxs.forEach((projectImageBox) => {
		const projectImageBoxWidth = projectImageBox.clientWidth;
		const projectImageBoxHeight = projectImageBox.clientHeight;
		const projectImageBoxDetails = projectImageBox.getBoundingClientRect();

		// Get the window width and height
		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		// Calculate the position of the project image box
		let top = e.clientY - yoffset;
		let left = e.clientX + xoffset;
		let bottom = e.clientY + yoffset + projectImageBoxHeight / 2;

		// Check if the project image box is too close to the top or left of the screen
		if (top < yoffset) {
			top = yoffset;
		}

		if (bottom > windowHeight - 40) {
			// top = top - projectImageBoxHeight + yoffset;
			top = windowHeight - projectImageBoxHeight - 40;
		}
		// if(top + 2*yoffset > windowHeight - 100){
		//     top = top - projectImageBoxHeight + yoffset;
		// }
		projectImageBox.style.top = top + 'px';

		// Check if the project image box is too close to the bottom or right of the screen
		if (left + projectImageBoxWidth > windowWidth) {
			left = left - projectImageBoxWidth - 2 * xoffset;
		}
		projectImageBox.style.left = left + 'px';
	});
});

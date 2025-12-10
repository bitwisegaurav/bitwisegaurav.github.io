const technologyBox = document.querySelector('.technologies');
const technologies = [
	{ name: 'react native', backgroundColor: '#61DAFB', color: '#181818' },
	{ name: 'expo', backgroundColor: '#000020', color: '#eee' },
	{
		name: 'javascript',
		backgroundColor: 'rgb(255,225,58)',
		color: '#181818',
	},
	{ name: 'typescript', backgroundColor: '#2A7CC7', color: '#eee' },
	{ name: 'react', backgroundColor: '#087EA4', color: '#eee' },
	{ name: 'react query', backgroundColor: '#FF4154', color: '#eee' },
	{ name: 'redux toolkit', backgroundColor: '#764ABC', color: '#eee' },
	{ name: 'android studio', backgroundColor: '#3DDC84', color: '#181818' },
	{ name: 'xcode', backgroundColor: '#1575F9', color: '#eee' },
	{ name: 'git', backgroundColor: '#eee', color: '#181818' },
	{ name: 'redux persist', backgroundColor: '#764ABC', color: '#eee' },
	{ name: 'redux query', backgroundColor: '#764ABC', color: '#eee' },
	{ name: 'zustand', backgroundColor: '#181818', color: '#eee' },
	{
		name: 'firebase firestore',
		backgroundColor: '#FFA611',
		color: '#181818',
	},
	{ name: 'push notifications', backgroundColor: '#4A90E2', color: '#eee' },
	{ name: 'appsflyer', backgroundColor: '#0080FF', color: '#eee' },
	{ name: 'crash analytics', backgroundColor: '#FFCA28', color: '#181818' },
	{ name: 'react hook form', backgroundColor: '#EC5990', color: '#eee' },
	{ name: 'ai integrations', backgroundColor: '#6A5ACD', color: '#eee' },
];

technologies.forEach((tech) => {
	const techBox = document.createElement('div');
	techBox.classList.add('tech');
	techBox.innerText = tech.name;
	techBox.addEventListener('mouseover', () => {
		techBox.style.background = tech.backgroundColor;
		techBox.style.color = tech.color;
		techBox.style.borderColor = 'transparent';
	});
	technologyBox.appendChild(techBox);
});

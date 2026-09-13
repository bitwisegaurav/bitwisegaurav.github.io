const technologyBox = document.querySelector('.technologies');
const technologies = [
	{ name: 'react native', backgroundColor: '#61DAFB', color: '#181818' },
	{ name: 'typescript', backgroundColor: '#3178C6', color: '#fff' },
	{ name: 'javascript', backgroundColor: '#F0DB4F', color: '#181818' },
	{ name: 'react', backgroundColor: '#149ECA', color: '#fff' },
	{ name: 'expo', backgroundColor: '#111111', color: '#fff' },
	{ name: 'swift', backgroundColor: '#F05138', color: '#fff' },

	{ name: 'redux toolkit', backgroundColor: '#764ABC', color: '#fff' },
	{ name: 'redux saga', backgroundColor: '#8B5CF6', color: '#fff' },
	{ name: 'zustand', backgroundColor: '#3B3B3B', color: '#fff' },
	{ name: 'react query', backgroundColor: '#FF4154', color: '#fff' },
	{ name: 'rtk query', backgroundColor: '#9B59B6', color: '#fff' },

	{ name: 'firebase', backgroundColor: '#FFB300', color: '#181818' },
	{ name: 'sentry', backgroundColor: '#5B5B5B', color: '#fff' },
	{ name: 'revenuecat', backgroundColor: '#E53935', color: '#fff' },
	{ name: 'stripe', backgroundColor: '#635BFF', color: '#fff' },
	{ name: 'react native iap', backgroundColor: '#007AFF', color: '#fff' },
	{ name: 'appsflyer', backgroundColor: '#00A67E', color: '#fff' },

	{ name: 'fastlane', backgroundColor: '#0088FF', color: '#fff' },
	{ name: 'eas build', backgroundColor: '#4630EB', color: '#fff' },
	{ name: 'expo updates', backgroundColor: '#4630EB', color: '#fff' },

	{ name: 'jest', backgroundColor: '#99425B', color: '#fff' },
	{ name: 'maestro', backgroundColor: '#F59E0B', color: '#181818' },

	{ name: 'claude', backgroundColor: '#D97757', color: '#fff' },
	{ name: 'figma', backgroundColor: '#6D5ACF', color: '#fff' },

	{ name: 'git', backgroundColor: '#F05032', color: '#fff' },
	{ name: 'github', backgroundColor: '#24292F', color: '#fff' },
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

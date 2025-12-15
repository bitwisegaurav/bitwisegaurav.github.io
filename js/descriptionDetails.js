document.addEventListener('DOMContentLoaded', async () => {
	const appKey =
		new URLSearchParams(window.location.search).get('project') ||
		'jamnation';
	try {
		const res = await fetch('./json/projectDetails.json', {
			cache: 'no-store',
		});
		if (!res.ok) return;
		const data = await res.json();
		const app = data[appKey];
		if (!app) return;

		const nameEl = document.getElementById('app-name');
		const tagEl = document.getElementById('app-tagLine');
		const descEl = document.getElementById('app-description');
		const challengeEl = document.getElementById('challenge');
		const solutionEl = document.getElementById('solution');
		const playBtn = document.getElementById('playStore-btn');
		const appBtn = document.getElementById('appStore-btn');
		const appIcon = document.getElementById('appIcon');

		if (nameEl) nameEl.textContent = app.name || '';
		if (tagEl) tagEl.textContent = app.tagLine || '';
		if (descEl) descEl.textContent = app.description || '';
		if (challengeEl) challengeEl.textContent = app.challenge || '';
		if (solutionEl) solutionEl.textContent = app.solution || '';

		if (appIcon) {
			appIcon.innerHTML = `<img src="./images/${appKey}Logo.png" alt="${app.name} Logo">`;
		}

		if (playBtn) {
			if (app.androidUrl) {
				playBtn.style.cursor = 'pointer';
				playBtn.addEventListener('click', () =>
					window.open(app.androidUrl, '_blank', 'noopener,noreferrer')
				);
			} else {
				playBtn.remove();
			}
		}

		if (appBtn) {
			if (app.iosUrl) {
				appBtn.style.cursor = 'pointer';
				appBtn.addEventListener('click', () =>
					window.open(app.iosUrl, '_blank', 'noopener,noreferrer')
				);
			} else {
				appBtn.remove();
			}
		}

		getAndRenderImages(appKey, app);
		updateSpecialColor();
	} catch (e) {}
});

async function getAndRenderImages(appName, appData) {
	const container = document.getElementById('screenshotsCarousel');
	const wrapper = document.getElementById('screenshotsCarouselContainer');
	if (!container || !wrapper) return;
	const dirUrl = `./appScreenshots/${encodeURIComponent(appName)}/`;
	try {
		const files = Array.from({length: appData?.count ?? 0}).map((_, idx) => appName+(idx+1)+'.png')

		if (files.length < 1) {
			wrapper.remove();
			return;
		}
		container.innerHTML = '';
		files.forEach((f) => {
			const shot = document.createElement('div');
			shot.className = 'shot';
			const img = document.createElement('img');
			img.src = dirUrl + f;
			shot.appendChild(img);
			container.appendChild(shot);
		});
	} catch (e) {
		wrapper.remove();
		return;
	}
}

async function updateSpecialColor() {
	const specialColor = sessionStorage.getItem('special-color');
	if (specialColor) {
		document.documentElement.style.setProperty(
			'--special-color',
			specialColor
		);
		document.documentElement.style.setProperty(
			'--shadow-color',
			specialColor + '88'
		);
	}
}

const lightcolors = [
	{ color: '#FFE74C', darkColor: '#968200', imageHue: '0deg' },
	{ color: '#6BF178', darkColor: '#4baf55', imageHue: '60deg' },
	{ color: '#91cfff', darkColor: '#2c7cb9', imageHue: '170deg' },
	{ color: '#FF7F18', darkColor: '#994e11', imageHue: '-20deg' },
	{ color: '#EE82EE', darkColor: '#8B008B', imageHue: '270deg' },
	{ color: '#FF9AA2', darkColor: '#75474a', imageHue: '-65deg' },
];
const colorpickerBox = document.querySelector('.colorpicker');
const introImageBox = document.getElementById('introimage');
const myImage = document.getElementById('my-image');
let activeColorForWebpage = '#FFE74C';

function addColors() {
	const colorsBox = colorpickerBox.querySelector('.colors');
	const activeColor = activeColorForWebpage;

	// colorsBox.innerHTML = "";

	colorsBox.innerHTML = lightcolors
		.map((color) => {
			return `<div class="color${
				color.color === activeColor ? ' activeColor' : ''
			}" style="background: ${color.color}" value="${
				color.color
			}" darkColor="${color.darkColor}" imageHue="${
				color.imageHue
			}"></div>`;
		})
		.join('');

	setDisplay();
	changeColors();
}

function setDisplay() {
	const colors = colorpickerBox.querySelectorAll('.color');

	colors.forEach((color) => {
		if (color.classList.contains('activeColor')) {
			color.style.display = 'flex';
		} else {
			color.style.display = 'none';
		}
	});
}

function changeColors() {
	const colors = colorpickerBox.querySelectorAll('.color');

	colors.forEach((color) => {
		color.addEventListener('click', function () {
			if (color.classList.contains('activeColor')) {
				let allColorsHidden = false;
				if (colors.length < 2) return;

				if (colors[colors.length - 1].style.display === 'none')
					allColorsHidden = true;

				if (allColorsHidden) {
					colors.forEach((color1) => {
						color1.style.display = 'flex';
					});
				} else {
					colors.forEach((color1) => {
						color1.style.display = 'none';
					});
					color.style.display = 'flex';
				}
			} else {
				const activeColorBox =
					colorpickerBox.querySelector('.activeColor');
				activeColorBox.classList.remove('activeColor');
				color.classList.add('activeColor');
				const selectedColor = color.getAttribute('value');
				const selectedDarkColor = color.getAttribute('darkColor');
				const selectedImageHue = color.getAttribute('imageHue');
				sessionStorage.setItem('special-color', selectedColor);
				document.documentElement.style.setProperty(
					'--special-color',
					selectedColor
				);
				document.documentElement.style.setProperty(
					'--shadow-color',
					selectedColor + '88'
				);
				mouseLightColor = selectedColor;
				mouseDarkColor = selectedDarkColor;
				cursor.style.borderColor = selectedColor;
				introImageBox.style.filter = `hue-rotate(${selectedImageHue})`;
				myImage.style.filter = `hue-rotate(${selectedImageHue})`;
				colors.forEach((color1) => {
					color1.style.display = 'none';
				});
				color.style.display = 'flex';
				// addColors();
			}
		});
	});
}

window.addEventListener('DOMContentLoaded', () => {
	addColors();
});

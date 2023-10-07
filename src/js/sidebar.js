const body = document.querySelector('body'),
	sidebar = document.querySelector('.sidebar'),
	sidebarToggle = document.querySelector('.sidebar-toggle'),
	header = document.querySelector('.header'),
	main = document.querySelector('main'),
	navElems = document.querySelectorAll('.nav-elem'),
	uploadImage = document.querySelector('.upload_image'),
	colorMode__close = document.querySelector('.color-mode__close'),
	colorMode = document.querySelector('.color-mode'),
	colorChangeMode = document.querySelector('.color-mode'),
	colorChangeMode__close = document.querySelector('.color-mode__close'),
	dropLists = document.querySelectorAll('.drop-list'),
	dropBox = document.querySelector('.drop-box'),
	avatar = document.querySelector('.avatar'),
	fileInput = document.querySelector('#fileInput'),
	setBgButton = document.querySelector('#setBgButton')
let dl_income = document.querySelector('.dl_income'),
	dl_promote = document.querySelector('.dl_promote')

document.onload = mediaQuery_1330()
window.addEventListener('resize', mediaQuery_1330)

sidebarToggle.addEventListener('click', toggleSidebar)
colorChangeMode.addEventListener('click', toggleMode)
colorChangeMode__close.addEventListener('click', toggleMode)
avatar.addEventListener('click', dropBoxToggle)

document.querySelector('.income').addEventListener('click', () => {
	dl_income = document.querySelector('.dl_income')
	dl_promote = document.querySelector('.dl_promote')
	if (!dl_promote.classList.contains('close')) {
		dl_promote.classList.toggle('close')
	}
	dl_income.classList.toggle('close')
})
document.querySelector('.promote').addEventListener('click', () => {
	dl_income = document.querySelector('.dl_income')
	dl_promote = document.querySelector('.dl_promote')
	if (!dl_income.classList.contains('close')) {
		dl_income.classList.toggle('close')
	} 
	dl_promote.classList.toggle('close')
})

document.addEventListener('click', (event) => {
	if (!dropBox.contains(event.target) 
		&& !dropBox.classList.contains('close')
		&& event.target != avatar
	) {
		dropBox.classList.toggle('close')
	}
})
document.addEventListener('click', (event) => {
	if (!dl_income.contains(event.target) 
		&& !dl_income.classList.contains('close')
		&& event.target != document.querySelector('.income')
		&& sidebar.classList.contains('close')
	) {
		dl_income.classList.toggle('close')
	}
})
document.addEventListener('click', (event) => {
	if (!dl_promote.contains(event.target) 
		&& !dl_promote.classList.contains('close')
		&& event.target != document.querySelector('.promote')
		&& sidebar.classList.contains('close')
	) {
		dl_promote.classList.toggle('close')
	}
})

setBgButton.addEventListener('click', () => {
	fileInput.click()
})
fileInput.addEventListener('change', (event) => {
	const file = event.target.files[0];

	if (file && file.type.startsWith('image/')) {
		const reader = new FileReader();

		reader.onload = (event) => {
			const imageUrl = event.target.result;
			uploadImage.style.backgroundImage = `url(${imageUrl})`;
			// if (sidebar.classList.contains('close')) {
			// 	uploadImage.style.backgroundImage = `none`;
			// }
		  };
		  reader.readAsDataURL(file);
		}
})

function mediaQuery_1330() {
	if (window.innerWidth <= 1130 && !sidebar.classList.contains('close')) {
		sidebar.classList.add('close')
		main.classList.add('close')
		header.classList.add('close')
		console.log(window.innerWidth)
	}
	if (window.innerWidth > 1130 && sidebar.classList.contains('close')) {
		sidebar.classList.remove('close')
		main.classList.remove('close')
		header.classList.remove('close')
		console.log(window.innerWidth)
	}
}
function dropBoxToggle() {
	dropBox.classList.toggle('close')
}
function toggleSidebar() {
	sidebar.classList.toggle('close')
	header.classList.toggle('close')
	main.classList.toggle('close')
}
function toggleMode() {
	body.classList.toggle('dark')
}
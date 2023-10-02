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
	dropList = document.querySelector('.drop-list'),
	dropBox = document.querySelector('.drop-box'),
	avatar = document.querySelector('.avatar')

sidebarToggle.addEventListener('click', toggleSidebar)
colorChangeMode.addEventListener('click', toggleMode)
colorChangeMode__close.addEventListener('click', toggleMode)
avatar.addEventListener('click', dropBoxToggle)

document.querySelector('.income').addEventListener('click', () => {
	const dl_income = document.querySelector('.dl_income')
	const dl_promote = document.querySelector('.dl_promote')
	if (!dl_promote.classList.contains('close')) {
		dl_promote.classList.toggle('close')
	}
	dl_income.classList.toggle('close')
})
document.querySelector('.promote').addEventListener('click', () => {
	const dl_income = document.querySelector('.dl_income')
	const dl_promote = document.querySelector('.dl_promote')
	if (!dl_income.classList.contains('close')) {
		dl_income.classList.toggle('close')
	} 
	dl_promote.classList.toggle('close')
})

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
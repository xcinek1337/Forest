const burgerBtn = document.querySelector('.navbar__burger')
const mobileMenuDiv = document.querySelector('.mobile-menu')
const navbarIcon = document.querySelector('.navbar__burger')
const navBtns = document.querySelectorAll('.mobile-menu li')

const offerBtns = document.querySelectorAll('.offer__card--btn')
const choosenBtn = document.querySelector('.offer__card:nth-child(2) .offer__card--btn')

const footerYear = document.querySelector('.footer')

let date = new Date()
let currentYear = date.getFullYear()
//scroll spy
document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('section')
	const navLinks = document.querySelectorAll('nav ul li a')

	function onScroll() {
		const scrollPosition = window.pageYOffset

		sections.forEach(function (section) {
			if (scrollPosition >= section.offsetTop - 90 && scrollPosition < section.offsetTop + section.offsetHeight - 90) {
				const currentSectionId = section.getAttribute('id')
				setActiveNav(currentSectionId)
			}
		})
	}

	function setActiveNav(currentSectionId) {
		navLinks.forEach(function (navLink) {
			navLink.classList.remove('scroll')

			if (navLink.getAttribute('href') === `index.html#${currentSectionId}`) {
				navLink.classList.add('scroll')
			}
		})
	}

	window.addEventListener('scroll', onScroll)
})

const openMenu = () => {
	mobileMenuDiv.classList.toggle('active')

	if (mobileMenuDiv.classList.contains('active')) {
		navbarIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
	} else {
		navbarIcon.innerHTML = ' <i class="fa-solid fa-bars"></i>'
	}
}

const deleteChoosenEffect = () => {
	choosenBtn.classList.remove('choosen')
}

const restoreChoosenEffect = () => {
	choosenBtn.classList.add('choosen')
}

offerBtns.forEach(btn => {
	btn.addEventListener('mouseenter', deleteChoosenEffect)
	btn.addEventListener('mouseleave', restoreChoosenEffect)
})

const automaticallyYear = () => {
	footerYear.textContent=`©${currentYear} Forest Group Company Ltd`
}

burgerBtn.addEventListener('click', openMenu)
navBtns.forEach(btn => btn.addEventListener('click', openMenu))
document.addEventListener('DOMContentLoaded', automaticallyYear);

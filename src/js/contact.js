const formBtn = document.querySelector('.form-btn')

const divPopup = document.querySelector('.popup')
const nameInput = document.querySelector('#name')
const mailInput = document.querySelector('#email')
const textArea = document.querySelector('#msg')

const formPopup = () => {
	if (nameInput.value !== '' && mailInput.value !== '' && textArea.value !== '') {
		divPopup.style.display = 'block'

		setTimeout(() => {
			divPopup.style.display = ''
		}, 2000)
	}
}

formBtn.addEventListener('click', formPopup)
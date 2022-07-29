const toggleSwitch = document.querySelector(".toggle-colophon")
const toggleCaret = document.querySelector(".toggle-colophon .caret")
const colophonTag = document.querySelector(".colophon")


const toggleColophon = function() {
	colophonTag.classList.toggle("hidden")
	toggleCaret.classList.toggle("active")
	// toggleSwitch.scrollIntoView({
	//   behavior: 'smooth'
	// })
}

toggleSwitch.addEventListener('click', () => {
  toggleColophon()
})
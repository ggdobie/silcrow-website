const toggleSwitch = document.querySelector(".toggle-colophon")
const toggleCaret = document.querySelector(".toggle-colophon .caret")
const colophonTag = document.querySelector(".colophon")
const footerTag = document.querySelector("footer")


const toggleColophon = function() {
	colophonTag.classList.toggle("hidden")
	toggleCaret.classList.toggle("active")
	footerTag.classList.toggle("expanded")

	// setTimeout(function(){
	// 	toggleSwitch.scrollIntoView({
	// 	  behavior: 'smooth'
	// 	})
	// }, 300)
}

toggleSwitch.addEventListener('click', () => {
  toggleColophon()
})
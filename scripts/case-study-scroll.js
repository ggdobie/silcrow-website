const caret = document.querySelector("header nav .caret")
const logo = document.querySelector("header nav .case-study-logo")

const scrollEffects = function() {

	if (window.pageYOffset > 0){
		caret.classList.add("retracted")
		logo.classList.add("retracted")
	}
	else {
		caret.classList.remove("retracted")
		logo.classList.remove("retracted")
	}
	
}

window.addEventListener("scroll", function() {
	
  scrollEffects()
  
})

scrollEffects()
const caret = document.querySelector("header nav .caret")
const logo = document.querySelector("header nav .case-study-logo")
const scrollTarget = document.querySelector(".scrollTarget")
const badges = document.querySelectorAll(".skills-badge")

const scrollEffects = function() {

	if (window.pageYOffset > 0){
		caret.classList.add("retracted")
		logo.classList.add("retracted")
	}
	else {
		caret.classList.remove("retracted")
		logo.classList.remove("retracted")
	}
	
	if (window.pageYOffset > scrollTarget.offsetTop - 300){
		badges.forEach(badge => {
			badge.classList.remove("hidden")
		})
	}
	else {
		badges.forEach(badge => {
			badge.classList.add("hidden")
		})
	}
	
}

window.addEventListener("scroll", function() {
	
  scrollEffects()
  
})

scrollEffects()
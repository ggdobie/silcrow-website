const titleSection = document.querySelector(".intro-title")
const blurbSection = document.querySelector(".intro-text")
const silcrowIcon = document.querySelector(".silcrow-icon")
const h1Tag = document.querySelector(".title-text h1")
const h2Tag = document.querySelector(".title-text h2")
const blurbSquiggle = document.querySelector(".intro-blurb .squiggle")
const pageBody = document.querySelector("body")
const contentContainer = document.querySelector(".content-container")

const scrollEffects = function() {

	if (window.pageYOffset > 0){
		titleSection.classList.add("collapsed")
		pageBody.classList.remove("reversed")
		blurbSection.classList.remove("reversed")
		silcrowIcon.classList.remove("reversed")
		h1Tag.classList.remove("reversed")
		h2Tag.classList.remove("reversed")
		blurbSquiggle.classList.remove("reversed")
		contentContainer.classList.remove("translucent")
	}
	else {
		titleSection.classList.remove("collapsed")
		pageBody.classList.add("reversed")
		blurbSection.classList.add("reversed")
		silcrowIcon.classList.add("reversed")
		h1Tag.classList.add("reversed")
		h2Tag.classList.add("reversed")
		blurbSquiggle.classList.add("reversed")
		contentContainer.classList.add("translucent")
	}
	
}

window.addEventListener("scroll", function() {
	
  scrollEffects()
  
})

scrollEffects()
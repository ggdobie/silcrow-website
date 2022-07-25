const titleSection = document.querySelector(".intro-title")
const blurbSection = document.querySelector(".intro-text")
const blurbSquiggle = document.querySelector(".intro-blurb .squiggle")
const pageBody = document.querySelector("body")
const contentContainer = document.querySelector(".content-container")

// if (window.matchMedia('(min-width: 640px)').matches) {
// 	console.log('Wide viewport');
// } else {
// 	console.log('Small viewport');
// }

const scrollEffects = function() {

	if (window.pageYOffset > 0){
		titleSection.classList.add("collapsed")
		pageBody.classList.remove("reversed")
		blurbSection.classList.remove("reversed")
		blurbSquiggle.classList.remove("reversed")
		contentContainer.classList.remove("translucent")
	}
	else {
		titleSection.classList.remove("collapsed")
		pageBody.classList.add("reversed")
		blurbSection.classList.add("reversed")
		blurbSquiggle.classList.add("reversed")
		contentContainer.classList.add("translucent")
	}
	
}

window.addEventListener('scroll', () => {
  scrollEffects()
})

scrollEffects()
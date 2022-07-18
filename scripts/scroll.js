const titleSection = document.querySelector(".intro-title")
const blurbSection = document.querySelector(".intro-blurb")
const blurbSquiggle = document.querySelector(".intro-blurb .squiggle")
const pageBody = document.querySelector("body")

// if (window.matchMedia('(min-width: 640px)').matches) {
// 	console.log('Wide viewport');
// } else {
// 	console.log('Small viewport');
// }

const scrollEffects = function() {

	if (window.pageYOffset > 0){
		titleSection.classList.add("collapsed")
		pageBody.classList.remove("reversed")
	}
	else {
		titleSection.classList.remove("collapsed")
		pageBody.classList.add("reversed")
	}
	
}

window.addEventListener('scroll', () => {
  scrollEffects()
})

scrollEffects()
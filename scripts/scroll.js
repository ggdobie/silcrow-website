const titleSection = document.querySelector(".intro-title")
const blurbSection = document.querySelector(".intro-blurb")
const blurbSquiggle = document.querySelector(".intro-blurb .squiggle")
const pageBody = document.querySelector("body")

// const calculateHeight = function() {
// 	let vh = window.innerHeight * 0.01
// 	document.documentElement.style.setProperty('--vh', `${vh}px`)
// }
// 
// window.addEventListener('resize', () => {
// 	if (window.pageYOffset <= 0) {
//     	calculateHeight()
// 	}
// })
// 
// calculateHeight()

const scrollEffects = function() {
	// const yPosition = window.pageYOffset
	// if (blurbSection.offsetTop - window.innerHeight <  yPosition){
	if (window.pageYOffset > 0){
		// titleSection.style.opacity = 0;
		// titleSection.style.paddingTop = 0;
		// titleSection.style.paddingBottom = 0;
		titleSection.classList.add("collapse")
		pageBody.classList.remove("reversed")
	}
	else {
		// titleSection.style.opacity = 1;
		titleSection.classList.remove("collapse")
		pageBody.classList.add("reversed")
	}
}

window.addEventListener('scroll', () => {
  scrollEffects()
})

scrollEffects()
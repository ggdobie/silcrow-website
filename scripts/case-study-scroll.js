const caret = document.querySelector("header nav .caret")
const clientLogo = document.querySelector("header nav .case-study-logo")
const silcrowLogo = document.querySelector("header nav .backlink.home")
const scrollTarget = document.querySelector(".scrollTarget")
const bannerSection = document.querySelector(".banner")
const badges = document.querySelectorAll(".skills-badge")
const layerSection = document.querySelector(".layers")
const layerCaptions = document.querySelectorAll(".illustration figcaption")

const scrollEffects = function() {

	if (window.pageYOffset > 0){
		caret.classList.add("retracted")
		clientLogo.classList.add("retracted")
	}
	else {
		caret.classList.remove("retracted")
		clientLogo.classList.remove("retracted")
	}
	
	if (window.pageYOffset > scrollTarget.offsetTop - 300){
		badges.forEach(badge => {
			badge.classList.remove("hidden")
		})
	}
	
	if (window.pageYOffset > bannerSection.getBoundingClientRect().bottom + window.innerHeight){
		silcrowLogo.classList.add("retracted")
	}
	else {
		silcrowLogo.classList.remove("retracted")
	}
	
	if (window.pageYOffset + window.innerHeight > layerSection.offsetTop + layerSection.getBoundingClientRect().height){
		layerCaptions.forEach(caption => {
			caption.classList.add("retracted")
		})
	}
	else {
		layerCaptions.forEach(caption => {
			caption.classList.remove("retracted")
		})
	}
	
}

window.addEventListener("scroll", function() {
	
  scrollEffects()
  
})

scrollEffects()
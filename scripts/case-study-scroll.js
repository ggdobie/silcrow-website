const caret = document.querySelector("header nav .caret")
const clientLogo = document.querySelector("header nav .case-study-logo")
const silcrowLogo = document.querySelector("header nav .backlink.home")
const header = document.querySelector("header")
const modeSwitcher = document.querySelector(".mode-switcher")
const scrollTarget = document.querySelector(".scrollTarget")
const bannerSection = document.querySelector(".banner")
const badges = document.querySelectorAll(".skills-badge")
const layerSection = document.querySelector(".layers")
const layerCaptions = document.querySelectorAll(".illustration figcaption")

let scrollCompare = window.pageYOffset || document.documentElement.scrollTop
let galleryActive = false

const scrollEffects = function() {
	
	let scrollY = window.pageYOffset || document.documentElement.scrollTop
	
	if (gallerySection.classList.contains("hidden")) {
		galleryActive = false
	}
	else {
		galleryActive = true		
	}
	
// Hide caret and client logo unless at top of the page
	
	if (galleryActive == true) {
		caret.classList.add("retracted")
		clientLogo.classList.add("retracted")
	}
	else if (scrollY > 0) {
		caret.classList.add("retracted")
		clientLogo.classList.add("retracted")
	}
	else {
		caret.classList.remove("retracted")
		clientLogo.classList.remove("retracted")
	}
	
// Show the skills badges once the bottom of the banner is reached
	
	if (scrollY > scrollTarget.offsetTop - 300) {
		badges.forEach(badge => {
			badge.classList.remove("hidden")
		})
	}
	
// Conditionally show the logo & mode switcher tabs on scroll up

	let bannerRegion = bannerSection.getBoundingClientRect().bottom + window.innerHeight
	
	if (scrollY < scrollCompare) {
		silcrowLogo.classList.remove("retracted")
		modeSwitcher.classList.remove("retracted")
	} 
	else if (scrollY > bannerRegion) {
		silcrowLogo.classList.add("retracted")
		modeSwitcher.classList.add("retracted")
	}
	else {
		silcrowLogo.classList.remove("retracted")
		modeSwitcher.classList.add("retracted")
	}
	
	scrollCompare = scrollY <= 0 ? 0 : scrollY;
	
// Hide the layer captions once the bottom of the layers section has been reached
	
	if (scrollY + window.innerHeight > layerSection.offsetTop + layerSection.getBoundingClientRect().height) {
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
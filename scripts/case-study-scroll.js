const caret = document.querySelector("header nav .caret")
const clientLogo = document.querySelector("header nav .case-study-logo")
const silcrowLogo = document.querySelector("header nav .backlink.home")
const header = document.querySelector("header")

const modeSwitcher = document.querySelector(".mode-switcher")
const scrollTarget = document.querySelector(".scrollTarget")

const progressIndicators = document.querySelectorAll(".progress-indicator")

const bannerSection = document.querySelector(".banner")
const badges = document.querySelectorAll(".skills-badge")

const layerSection = document.querySelector(".layers")
const layerCaptions = document.querySelectorAll(".illustration figcaption")

const body = document.body
const html = document.documentElement

let scrollCompare = window.pageYOffset || document.documentElement.scrollTop

let galleryActive = false

let viewportHeight = window.innerHeight
let pageHeight = body.offsetHeight
let scrollableHeight = pageHeight - viewportHeight

const scrollEffects = function() {
	
	if (gallerySection.classList.contains("hidden")) {
		galleryActive = false
	}
	else {
		galleryActive = true		
	}
	
	let scrollY = window.pageYOffset || document.documentElement.scrollTop
	
// Set the progress indicator percentage to the scroll progress
	
	viewportHeight = window.innerHeight
	pageHeight = body.offsetHeight
	scrollableHeight = pageHeight - viewportHeight
	
	const pageProgress = scrollY / scrollableHeight
	const normalisedProgress = Math.round(pageProgress*1000) / 1000
	
	progressIndicators.forEach(progressIndicator => {
		progressIndicator.style.transform = "scaleX(" + normalisedProgress + ")"
	})	
	
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
	
	// Logic for narrow breakpoints
	if (window.matchMedia("(max-width: 900px)").matches) {	
	// Scrolling up	(narrow)
		if (scrollY <= scrollCompare) {
			if (scrollY == 0 && galleryActive == false) {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.add("retracted")
			}
			else {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.remove("retracted")
			}
		}		
	//scrolling down (narrow)
		else {
			if (scrollY < bannerRegion) {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.add("retracted")
			}
			else {
				silcrowLogo.classList.add("retracted")
				modeSwitcher.classList.add("retracted")
			}
		}		
	}
	// Logic for wide breakpoints
	if (window.matchMedia("(min-width: 900px)").matches) {	
	// Scrolling up	(wide)
		if (scrollY <= scrollCompare) {
			if (scrollY == 0 && galleryActive == false) {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.add("retracted")	
			}
			else {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.remove("retracted")
			}
		}		
	//scrolling down (wide)
		else {
			if (scrollY == 0) {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.add("retracted")
			}
			else {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.remove("retracted")
			}
		}		
	}

	// Scrolling down
	// else if (scrollY > bannerRegion && window.matchMedia("(max-width: 900px)").matches) {
	// 	silcrowLogo.classList.add("retracted")
	// 	modeSwitcher.classList.add("retracted")
	// }
	// else if (window.matchMedia("(max-width: 900px)").matches) {
	// 	silcrowLogo.classList.remove("retracted")
	// 	modeSwitcher.classList.add("retracted")
	// }
	
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

window.addEventListener("resize", function() {
	
  viewportHeight = window.innerHeight
  pageHeight = body.offsetHeight  
  
  scrollEffects()
  
})

scrollEffects()
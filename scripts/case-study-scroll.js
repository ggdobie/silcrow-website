const caret = document.querySelector("header nav .caret")
const clientLogo = document.querySelector("header nav .case-study-logo")
const silcrowLogo = document.querySelector("header nav .backlink.home")
const silcrowLogoImage = document.querySelector("header nav .backlink.home img")
const header = document.querySelector("header")

const modeSwitcher = document.querySelector(".mode-switcher")
const scrollTarget = document.querySelector(".scrollTarget")

const progressIndicators = document.querySelectorAll(".progress-indicator")

const bannerSection = document.querySelector(".banner")
const badges = document.querySelectorAll(".skills-badge")

const layerSection = document.querySelector(".layers")
const layerCaptions = document.querySelectorAll(".illustration figcaption")

const okrContainer = document.querySelector(".card-container")
const okrCards = okrContainer.querySelectorAll(".okr-card")

const baseSection = document.querySelector(".hide-switcher")

const body = document.body
const html = document.documentElement

let scrollCompare = window.pageYOffset || document.documentElement.scrollTop

let galleryActive = false

let viewportHeight = window.innerHeight
let pageHeight = body.offsetHeight
let scrollableHeight = pageHeight - viewportHeight

const scrollEffects = function() {
	
// Set gallery active state

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
	let baseRegion = baseSection.getBoundingClientRect().top - window.innerHeight
	
	// Logic for narrow breakpoints
	if (window.matchMedia("(max-width: 900px)").matches) {	
	// Scrolling up	(narrow)
		if (scrollY <= scrollCompare) {
			if (scrollY == 0 && galleryActive == false) {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.add("retracted")
			}
			else if (baseRegion > 0) {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.remove("retracted")
			}
			// invert logo if below banner
			if (scrollY > bannerRegion && silcrowLogoImage.classList.contains("invertable")) {
				silcrowLogoImage.classList.add("inverted")
			}
			else {
				silcrowLogoImage.classList.remove("inverted")
			}
		}		
	//Scrolling down (narrow)
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
	//Scrolling down (wide)
		else {
			if (scrollY == 0 || baseRegion < 0) {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.add("retracted")
			}
			else {
				silcrowLogo.classList.remove("retracted")
				modeSwitcher.classList.remove("retracted")
			}
		}
		// invert logo if below banner
		if (scrollY > bannerRegion && silcrowLogoImage.classList.contains("invertable")) {
			silcrowLogoImage.classList.add("inverted")
		}
		else {
			silcrowLogoImage.classList.remove("inverted")
		}	
	}
	
	scrollCompare = scrollY <= 0 ? 0 : scrollY;
	
// Hide the layer captions once the bottom of the layers section has been reached
	
	if (layerSection && scrollY + window.innerHeight > layerSection.offsetTop + layerSection.getBoundingClientRect().height) {
		layerCaptions.forEach(caption => {
			caption.classList.add("retracted")
		})
	}
	else if (layerSection) {
		layerCaptions.forEach(caption => {
			caption.classList.remove("retracted")
		})
	}

// Fade in each OKR card as it gets closer to the middle of the viewport

	if (okrContainer) {
		okrCards.forEach((okrCard) => {
			const okrTop = okrCard.getBoundingClientRect().top
			const okrHeight = okrCard.getBoundingClientRect().height
			
			const okrMiddleYPos = (okrTop + (okrHeight * 0.5))
			
			const viewportMiddle = viewportHeight * 0.5
			
			const distanceToZone = Math.abs(okrMiddleYPos - viewportMiddle)
			
			const okrOpacity = mapAndClamp(distanceToZone, viewportMiddle, 0, 0, 1)
			const okrScale = mapAndClamp(distanceToZone, viewportMiddle, 0, 0.6, 1)
			
			okrCard.style.opacity = okrOpacity
			okrCard.style.transform = `scale(${okrScale},${okrScale})`
		})
	}
	
}

window.addEventListener("scroll", function() {
	
  scrollEffects()
  
})

window.addEventListener("resize", function() {
  
  scrollEffects()
  
})

scrollEffects()
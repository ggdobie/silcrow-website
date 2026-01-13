const sectionTag = document.querySelector(".client-list") 
const logoContainer = document.querySelector(".logo-grid-container")
const logoRows = document.querySelectorAll(".client-logo-row")

// CACHE THE DIMENSIONS THAT DON'T CHANGE DURING SCROLL
let sectionY, sectionHeight, containerWidth, containerXPos
let rowWidths = []
let logoData = []

// ADD FLAG FOR WHEN TO REQUEST THE ANIMATION FRAMES
let ticking = false

const updateDimensions = function() {
	sectionY = sectionTag.offsetTop
	sectionHeight = sectionTag.getBoundingClientRect().height
	containerWidth = logoContainer.offsetWidth
	containerXPos = logoContainer.getBoundingClientRect().left
	
	// CACHE ROW WIDTHS
	rowWidths = Array.from(logoRows).map(row => row.getBoundingClientRect().width)
	
	// CACHE LOGO DATA
	logoData = Array.from(logoRows).map(logoRow => {
		return Array.from(logoRow.querySelectorAll("img")).map(logo => ({
			element: logo,
			width: logo.getBoundingClientRect().width
		}))
	})
}

const fadeAndMoveLogos = function() {
	const scrollY = window.pageYOffset
	
	logoRows.forEach((logoRow, index) => {
		const rowWidth = rowWidths[index]
		
		// ADD HARDCODED DELAYS TO MIDDLE AND TOP ROWS
		let delay = (index == 1 || index == 2) ? 0.9 : 1.5
		
		// CHECK WHETHER THE SECTION IS VISIBLE IN THE VIEWPORT
		if (scrollY > (sectionY - sectionHeight) && scrollY < (sectionY + sectionHeight)) {
			
			// MAP THE EXTREMES OF THE SCROLL Y TO RELATIVE X POSITIONS
			let movement = mapAndClamp(scrollY, sectionY - window.innerHeight, sectionY + window.innerHeight, 0 - (rowWidth / 4), (rowWidth / 4))
			
			// REVERSE DIRECTION OF EVERY SECOND ROW
			if (index % 2 === 0) {
				movement = 0 - movement
			}
			
			// MOVE THE ROWS
			logoRow.style.transform = `translateX(${movement * delay}px)`
		}
		
		// FADE LOGOS DEPENDING ON THEIR PROXIMITY TO THE CENTRE
		let fadeSeverity = window.matchMedia("(min-width: 1194px)").matches ? 0.6 : 0.5
		
		logoData[index].forEach((logoInfo) => {
			const logoCenter = logoInfo.width / 2
			
			// GET THE POSITION OF THE LOGO RELATIVE TO THE CONTAINER
			const logoRelXPos = (logoInfo.element.getBoundingClientRect().left - containerXPos) - (containerWidth * 0.5)
			let logoDelta = logoRelXPos + logoCenter
			
			// CONVERT NEGATIVE INTEGERS TO POSITIVE
			logoDelta = Math.abs(logoDelta)
			
			const targetOpacity = mapAndClamp(logoDelta, 0, containerWidth * fadeSeverity, 1, 0)
			logoInfo.element.style.opacity = targetOpacity
		})
	})
	
	ticking = false
}

// UPDATE DIMENSIONS ONLY ONCE FOR THE FIRST TIME
updateDimensions()

window.addEventListener("scroll", function() {
	if (!ticking) {
		requestAnimationFrame(fadeAndMoveLogos)
		ticking = true
	}
})

window.addEventListener("resize", function() {
	if (!ticking) {
		requestAnimationFrame(() => {
			updateDimensions()
			fadeAndMoveLogos()
		})
		ticking = true
	}
})
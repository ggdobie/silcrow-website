const sectionTag = document.querySelector(".diagram") 
const illustrationTag = document.querySelector(".diagram .illustration")
let mobileBreakpoint = true

const moveIllustration = function() {
	const scrollY = window.pageYOffset
	
	const sectionY = sectionTag.offsetTop
	const sectionHeight = sectionTag.getBoundingClientRect().height
	
	const illustrationWidth = illustrationTag.offsetWidth
		
			
	// CHECK WHETHER THE SECTION IS VISIBLE IN THE VIEWPORT
	if (scrollY > (sectionY) && scrollY < (sectionY + sectionHeight - (window.innerHeight * 0.5))) {
				
		// MAP THE EXTREMES OF THE SCROLL Y TO RELATIVE X POSITIONS
		movement = mapAndClamp(scrollY, sectionY, sectionY + sectionHeight, 0, illustrationWidth)
		movement *= -1
		
		// MOVE THE ILLUSTRATION
		illustrationTag.style.transform = `translateX(${movement}px)`
	}
	
}

window.addEventListener("resize", function() {
	
	if (window.matchMedia("(min-width: 640px)").matches) {
		mobileBreakpoint = false
	}
	else {
		mobileBreakpoint = true
	}
	
})

window.addEventListener("scroll", function() {
	
	if (mobileBreakpoint == true) {
		moveIllustration()
	}	
	
})


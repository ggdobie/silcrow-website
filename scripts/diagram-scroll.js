const sectionTag = document.querySelector(".diagram") 
const illustrationTag = document.querySelector(".diagram .illustration")
let mobileBreakpoint = true

function clamp(input, min, max) {
  return Math.max(min, Math.min(input, max))
}

function map(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

function mapAndClamp(value, low1, high1, low2, high2) {
  return clamp(
	map(value, low1, high1, low2, high2),
	Math.min(low2, high2), 
	Math.max(low2, high2)
  )
}

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


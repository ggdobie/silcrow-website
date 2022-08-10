const calculateHeight = function() {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty("--vh", `${vh}px`)
}

window.addEventListener("resize", function() {
	
	let mobileBreakpoint = true
	
	if (window.matchMedia("(min-width: 900px)").matches) {
		mobileBreakpoint = false
	} 
	else {
		mobileBreakpoint = true
	}
	
	if (mobileBreakpoint == true) {
  		calculateHeight()
	}
	
})

calculateHeight()
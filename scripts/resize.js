const calculateHeight = function() {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', () => {
	
	let mobileBreakpoint = true
	
	if (window.matchMedia('(min-width: 640px)').matches) {
		mobileBreakpoint = false
	} else {
		mobileBreakpoint = true
	}
	
	if (window.pageYOffset <= 0 && mobileBreakpoint == true) {
  		calculateHeight()
	}
	
})

calculateHeight()
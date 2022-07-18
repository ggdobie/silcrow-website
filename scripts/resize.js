const calculateHeight = function() {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', () => {
  if (window.pageYOffset <= 0) {
	  calculateHeight()
  }
})

calculateHeight()
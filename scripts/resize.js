const calculateHeight = function() {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
	console.log(vh)
}

window.addEventListener('resize', () => {
  calculateHeight()
})

calculateHeight()
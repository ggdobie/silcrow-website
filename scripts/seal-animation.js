const silcrow = document.querySelector(".silcrow-icon")
let interval = null

const startInterval = function () {
  interval = setInterval(() => {
	  randomiseVariables()	
  }, 2000)
}

// function checkFont() {
// 	return window.getComputedStyle(silcrow, null).getPropertyValue('font-family')
// }

const randomiseVariables = function () {
	
	// const silcrowFont = checkFont()
	// const fontToVerify = '\"' + 'Anybody Silcrow Variable' + '\"'
	// const fontToVerify = "Anybody Silcrow Variable"
	// 
	// console.log(silcrowFont.toString(), fontToVerify.toString())
	// 
	// if (silcrowFont.toString() === fontToVerify.toString()) {
	  silcrow.style.setProperty("--weight", randomRoundNumber(100, 900))
	  silcrow.style.setProperty("--width", randomRoundNumber(60, 150))
	// }
	
}

randomiseVariables()
startInterval()
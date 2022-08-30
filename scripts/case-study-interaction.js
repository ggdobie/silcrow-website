const galleryCta = document.querySelector(".show-gallery")
const mainCta = document.querySelector(".show-main")

const gallerySection = document.querySelector(".gallery")
const mainSection = document.querySelector("main")

const showGallery = function() {
	gallerySection.classList.remove("hidden")
	mainSection.classList.add("hidden")
	gallerySection.scrollIntoView( {behavior: "smooth"} )
}

galleryCta.addEventListener("click", function() {
	
  showGallery()
  
})

const showMain = function() {
	gallerySection.classList.add("hidden")
	mainSection.classList.remove("hidden")
	mainSection.scrollIntoView( {behavior: "smooth"} )
}

mainCta.addEventListener("click", function() {
	
  showMain()
  
})
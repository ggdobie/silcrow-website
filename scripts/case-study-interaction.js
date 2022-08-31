const galleryCta = document.querySelector(".show-gallery")
const mainCta = document.querySelector(".show-main")
const scrollBadge = document.querySelector(".scrollBadge")
const firstSection = document.querySelector(".intro")

const gallerySection = document.querySelector(".gallery")
const mainSection = document.querySelector("main")


galleryCta.addEventListener("click", function() {
	
  gallerySection.classList.remove("hidden")
  mainSection.classList.add("hidden")
  gallerySection.scrollIntoView( {behavior: "smooth"} )
  
})

mainCta.addEventListener("click", function() {
	
  gallerySection.classList.add("hidden")
  mainSection.classList.remove("hidden")
  mainSection.scrollIntoView( {behavior: "smooth"} )
  
})

scrollBadge.addEventListener("click", function() {
	
  firstSection.scrollIntoView( {behavior: "smooth"} )
  
})
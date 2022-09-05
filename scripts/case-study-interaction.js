const galleryCtas = document.querySelectorAll(".show-gallery")
const mainCtas = document.querySelectorAll(".show-main")

const scrollBadge = document.querySelector(".scrollBadge")
const firstSection = document.querySelector(".scrollTarget")

const gallerySection = document.querySelector(".gallery")
const mainSection = document.querySelector("main")


const showMain = function () {
  
  gallerySection.classList.add("hidden")
  mainSection.classList.remove("hidden")
  mainSection.scrollIntoView( {behavior: "smooth"} )
  
}

const showGallery = function () {
  
  gallerySection.classList.remove("hidden")
  mainSection.classList.add("hidden")
  gallerySection.scrollIntoView( {behavior: "smooth"} )
  
}

galleryCtas.forEach(cta => {
  
  cta.addEventListener("click", function() {    
    showGallery()
  })
  
})

mainCtas.forEach(cta => {
  
  cta.addEventListener("click", function() {    
    showMain()
  })
  
})

scrollBadge.addEventListener("click", function() {
	
  firstSection.scrollIntoView( {behavior: "smooth"} )
  
})
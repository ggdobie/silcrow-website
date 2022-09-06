const galleryCtas = document.querySelectorAll(".show-gallery")
const mainCtas = document.querySelectorAll(".show-main")

const analysisTab = document.querySelector(".mode-switcher .tab.show-main")
const galleryTab = document.querySelector(".mode-switcher .tab.show-gallery")

const scrollBadge = document.querySelector(".scrollBadge")
const firstSection = document.querySelector(".scrollTarget")

const gallerySection = document.querySelector(".gallery")
const mainSection = document.querySelector("main")
// const bannerSection = document.querySelector(".banner")


const showMain = function () {

  gallerySection.classList.add("hidden")
  mainSection.classList.remove("hidden")
  bannerSection.classList.remove("hidden")
  mainSection.scrollIntoView( {behavior: "smooth"} )
  
  galleryTab.classList.remove("selected")
  analysisTab.classList.add("selected")
  
}

const showGallery = function () {
  
  gallerySection.classList.remove("hidden")
  mainSection.classList.add("hidden")
  bannerSection.classList.add("hidden")
  gallerySection.scrollIntoView( {behavior: "smooth"} )

  galleryTab.classList.add("selected")
  analysisTab.classList.remove("selected")
  
  scrollEffects()
  
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
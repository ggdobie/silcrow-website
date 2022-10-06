const galleryCtas = document.querySelectorAll(".show-gallery")
const mainCtas = document.querySelectorAll(".show-main")

const analysisTab = document.querySelector(".mode-switcher .tab.show-main")
const galleryTab = document.querySelector(".mode-switcher .tab.show-gallery")

const scrollBadge = document.querySelector(".scrollBadge")
const firstSection = document.querySelector(".scrollTarget")

const gallerySection = document.querySelector(".gallery")
const mainSection = document.querySelector("main")

const bookmarkedSection = document.querySelector(".bookmark")
const footerSection = document.querySelector("footer")

let returnToBookmark = false

const showMain = function () {

  gallerySection.classList.add("hidden")
  mainSection.classList.remove("hidden")
  bannerSection.classList.remove("hidden")
  
  galleryTab.classList.remove("selected")
  analysisTab.classList.add("selected")
  
  if (footerSection.classList.contains("chameleon")) {
    footerSection.classList.remove("paper")
    footerSection.classList.add("tan")    
  }
  else {}
  
  // scroll down to the gallery cta if it was the one that triggered the switch to gallery
  // otherwise scroll to the top
  if (returnToBookmark == true) {
    bookmarkedSection.scrollIntoView( {behavior: "smooth"} )
  }
  else {
    mainSection.scrollIntoView( {behavior: "smooth"} )
  }
  
}

const showGallery = function (clickedElement) {
  
  gallerySection.classList.remove("hidden")
  mainSection.classList.add("hidden")
  bannerSection.classList.add("hidden")
  gallerySection.scrollIntoView( {behavior: "smooth"} )

  galleryTab.classList.add("selected")
  analysisTab.classList.remove("selected")
  
  if (footerSection.classList.contains("chameleon")) {
    footerSection.classList.add("paper")
    footerSection.classList.remove("tan")    
  }
  else {}
  
  scrollEffects()
  
  // check if clicked cta was further down the case study or the tab in the mode switcher
  // if so, set the bookmark to return to later
  if (clickedElement.target.classList.contains("cta")) {
    returnToBookmark = true;
  }
  else {
    returnToBookmark = false;
  }
  
}

galleryCtas.forEach(cta => {
  
  cta.addEventListener("click", function(EventTarget) {    
    showGallery(EventTarget)
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
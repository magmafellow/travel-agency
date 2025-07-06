import $ from "jquery"

console.log("[burger.js] LOADED")

$(main())




function main() {
  const burgerHeader = $('.burger-header')
  const burgerSheet = $('.burger-sheet')

  const mobileSheet = $('.mobile-burger-sheet')

  burgerHeader.on('click', function(event){
    mobileSheet.addClass('is-active')
    burgerHeader.addClass('is-hidden')
    setTimeout(() => {
      burgerSheet.addClass('is-active')
    }, 200)
  })
  
  burgerSheet.on('click', function(event) {
    mobileSheet.removeClass('is-active')
    setTimeout(() => {
      burgerSheet.removeClass('is-active')
      burgerHeader.removeClass('is-hidden')
    }, 200)
  })
  
}


import $ from "jquery"

console.log("[burger.js] LOADED")

$(main())




function main() {

  function lockScroll() {
    $('body').addClass('scroll-lock')
    $('html').addClass('scroll-lock')

  }
  function unLockScroll() {
    $('body').removeClass('scroll-lock')
    $('html').removeClass('scroll-lock')
  }
  
  const burgerHeader = $('.burger-header')
  const burgerSheet = $('.burger-sheet')

  const mobileSheet = $('.mobile-burger-sheet')

  burgerHeader.on('click', function(event){
    lockScroll()
    mobileSheet.addClass('is-active')
    burgerHeader.addClass('is-hidden')

    // Timeout
    setTimeout(() => {
      burgerSheet.addClass('is-active')
    }, 200)
  })
  
  burgerSheet.on('click', function(event) {
    mobileSheet.removeClass('is-active')

    // Timeout for waiting sheet slides left away
    setTimeout(() => {
      burgerSheet.removeClass('is-active')
      burgerHeader.removeClass('is-hidden')
      unLockScroll()
    }, 200)
  })
  
}


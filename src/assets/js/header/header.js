import $ from 'jquery'



function main() {
  const header = $('.header')
  const dynamicClass = 'is-scrolled-under-100'
  
  function turnOnHeaderScrolled(){
    header.addClass(dynamicClass)
  }
  function turnOffHeaderScrolled(){
    header.removeClass(dynamicClass)
  }
  
  function handleScroll(event) {
    // console.log('event: ', event)
    if (window.scrollY > 100) {
      turnOnHeaderScrolled()
    } else if (window.scrollY <= 100) {
      turnOffHeaderScrolled()
    }
  }
  
  $(window).on('scroll', handleScroll)
}


$(main())

const nextIcon = '<img class = "sliderarrow" src="./images/slider/right-arrow.svg" alt="right">';
const prevIcon = '<img class = "sliderarrow" src="./images/slider/left-arrow.svg" alt="left" >';

$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  margin: 30,
  nav: true,
  navText: [
    prevIcon,
    nextIcon
  ],
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})
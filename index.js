// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Projects Carousel Functionality
let currentProjectSlideIndex = 0; // Start at slide 1

function moveProjectsCarousel(direction) {
  showProjectSlide(currentProjectSlideIndex += direction)
}

function currentProjectSlide(n) {
  showProjectSlide(currentProjectSlideIndex = n)
}

function showProjectSlide(n) {
  const slides = document.querySelectorAll('.projects__carousel-slide')
  const dots = document.querySelectorAll('.projects__dot')

  // Wrap around carousel
  if (n >= slides.length) {
    currentProjectSlideIndex = 0
  }
  if (n < 0) {
    currentProjectSlideIndex = slides.length - 1
  }

  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'))
  dots.forEach(dot => dot.classList.remove('active'))

  // Add active class to current slide and dot
  slides[currentProjectSlideIndex].classList.add('active')
  dots[currentProjectSlideIndex].classList.add('active')
}



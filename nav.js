const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');




  burger.addEventListener('click', () => {

    // nav.classList.add("active")

    //toggle nav
    if (nav.classList.contains('nav-active')) {
      nav.classList.add('nav-deactive');
      nav.classList.remove('nav-active');
    } else {
      nav.classList.add('nav-active');
      nav.classList.remove('nav-deactive');
    }


    //Animate Links
    navLinks.forEach((link, index) => {
      link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3} s';
    })
  });
}

const reportWindowSize = () => {
  const nav = document.querySelector('.nav-links');
  if (nav.classList.contains('nav-active') || nav.classList.contains('nav-deactive')) {
    nav.classList.remove('nav-deactive');
    nav.classList.remove('nav-active');
  }
}
navSlide();
window.addEventListener('resize', reportWindowSize);

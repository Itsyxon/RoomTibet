const menu = document.querySelector('.nav__list-mobile')
const menuBtn = document.querySelector('.mobile-menu-btn')
const mobileClose = document.querySelector('.mobile-close')
const contentItemBlock = document.querySelectorAll('.popular__content-block')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
  //   if (menu.classList.contains('active')) {
  //     document.body.style.overflow = 'hidden'
  //   }
})

mobileClose.addEventListener('click', () => {
  menu.classList.remove('active')
  //   document.body.style.overflow = 'visible'
})

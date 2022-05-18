window.addEventListener("scroll", onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

// ====== SOLUCAO DO MAYK ============================

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionEndsAt = sectionTop + sectionHeight
  const menuElement = document.querySelector(
    `.menu a[href*=${section.getAttribute("id")}]`
  )

  if (sectionTop <= targetLine && sectionEndsAt >= targetLine) {
    menuElement.classList.add("active")
  } else {
    menuElement.classList.remove("active")
  }
}

// ====== MINHA SOLUCAO ========================
// PS: Necessita adicionar IDs nos respectivos elementos HTML do .menu

// function activateMenuAtCurrentSection() {
//   activateMenuAtHomeSection()
//   activateMenuAtServicesSection()
//   activateMenuAtAboutSection()
//   activateMenuButtonAtContactSection()
// }

// function activateMenuAtHomeSection() {
//   const targetLine = scrollY + innerHeight / 2
//   const homeSectionTop = home.offsetTop
//   const homeSectionHeight = services.offsetHeight

//   if (homeSectionTop <= targetLine && homeSectionHeight >= targetLine) {
//     menuHome.classList.add("active")
//     menuServices.classList.remove("active")
//     menuAbout.classList.remove("active")
//   } else {
//     menuHome.classList.remove("active")
//   }
// }

// function activateMenuAtServicesSection() {
//   const targetLine = scrollY + innerHeight / 2
//   const servicesSectionTop = services.offsetTop
//   const servicesSectionHeight = home.offsetHeight + services.offsetHeight

//   if (servicesSectionTop <= targetLine && servicesSectionHeight >= targetLine) {
//     menuHome.classList.remove("active")
//     menuServices.classList.add("active")
//     menuAbout.classList.remove("active")
//   } else {
//     menuServices.classList.remove("active")
//   }
// }

// function activateMenuAtAboutSection() {
//   const targetLine = scrollY + innerHeight / 2
//   const aboutSectionTop = about.offsetTop
//   const aboutSectionHeight =
//     home.offsetHeight + services.offsetHeight + about.offsetHeight

//   if (aboutSectionTop <= targetLine && aboutSectionHeight >= targetLine) {
//     menuHome.classList.remove("active")
//     menuServices.classList.remove("active")
//     menuAbout.classList.add("active")
//   } else {
//     menuAbout.classList.remove("active")
//   }
// }

// function activateMenuButtonAtContactSection() {
//   const targetLine = scrollY + innerHeight / 2
//   const contactSectionTop = contact.offsetTop
//   const contactSectionHeight =
//     home.offsetHeight +
//     services.offsetHeight +
//     about.offsetHeight +
//     contact.offsetHeight

//   if (contactSectionTop <= targetLine && contactSectionHeight >= targetLine) {
//     menuHome.classList.remove("active")
//     menuServices.classList.remove("active")
//     menuAbout.classList.remove("active")
//     menuButton.classList.add("active")
//   } else {
//     menuButton.classList.remove("active")
//   }
// }

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll")
  } else {
    navigation.classList.remove("scroll")
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact header,
  #contact .content,  
  #footer,
  #footer .logo,
  #footer .social-links`)

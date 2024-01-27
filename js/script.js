const body = document.querySelector('body')
const burger = document.querySelector('.header__burger')
const archiveMenu = document.querySelector('.archive-menu')
const menu = document.querySelector('.header__menu')
const linksArr = document.querySelectorAll('.header__link')
const contacts = document.querySelector('.header__contacts')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
    contacts.classList.toggle('active')
    if (archiveMenu !== null) {
        archiveMenu.classList.toggle('active')
    }
    body.classList.toggle("menu-open")
})

// link scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const blockID = anchor.getAttribute("href");
        const offset = document.querySelector('' + blockID).offsetTop - document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
        body.classList.remove("menu-open")
        menu.classList.remove('active')
        burger.classList.remove('active')
        contacts.classList.remove('active')
    })
}
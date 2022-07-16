const headerBtn = document.querySelector('.header_btn')
const headerMenu = document.querySelector('.header_menu')
const header = document.querySelector('.header')

headerBtn.addEventListener('click', toggleMenu)

//establecer funcion toggle, que al asiganrle esta clase muestre y esconda el menu
function toggleMenu () {
    headerMenu.classList.toggle('header_menu--hidden')
}

document.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop
    if ( scrollPosition >= 600) {
        // console.log('cambiar color')
        header.classList.add('header--background')
    } else {
        header.classList.remove('header--background')
    }
})


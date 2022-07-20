const headerBtn = document.querySelector('.header_btn')
const headerMenu = document.querySelector('.header_menu')
const header = document.querySelector('.header')

headerBtn.addEventListener('click', toggleMenu)

//establecer funcion toggle, que al asiganrle esta clase muestre y esconda el menu
function toggleMenu () {
    headerMenu.classList.toggle('header_menu--hidden')
}

//asiganmos el evento scroll, de manera que al cumplirse la condicion, tome un color el header
document.addEventListener('scroll', () => {

    const scrollPosition = document.documentElement.scrollTop

    //si el scroll es mayor o igual a 600, le agrega la clase, que le pone color al header
    if ( scrollPosition >= 600) {
        // console.log('cambiar color')
        header.classList.add('header--background')
    //si el scroll es menor remueva dicha clase
    } else {
        header.classList.remove('header--background')
    }
})


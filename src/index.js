// import validator from './validator.js';
const headerBtn = document.querySelector('.header_btn')
const headerMenu = document.querySelector('.header_menu')


headerBtn.addEventListener('click', toggleMenu)


//establecer funcion que mediante el cambio de estilos a la barra de menu lo esconda y lo muestre
//tambien podria usar un toggle, y haciendolo con clases
function toggleMenu () {
    // if(headerMenu.style.display != 'block') {
    //     headerMenu.style.display = 'block'
    // } else {
    //     headerMenu.style.display = 'none'
    // }
    headerMenu.classList.toggle('header_menu--hidden')
}



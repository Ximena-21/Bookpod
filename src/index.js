// import validator from './validator.js';
const headerBtn = document.querySelector('.headerBtn')
const headerMenu = document.querySelector('.headerMenu')


headerBtn.addEventListener('click', toggleMenu)


//establecer funcion que mediante el cambio de estilos a la barra de menu lo esconda y lo muestre
//tambien podria usar un toggle, y haciendolo con clases
function toggleMenu () {
    // if(headerMenu.style.display != 'block') {
    //     headerMenu.style.display = 'block'
    // } else {
    //     headerMenu.style.display = 'none'
    // }
    headerMenu.classList.toggle('headerMenu--hidden')
}



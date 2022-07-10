const headerBtn = document.querySelector('.headerBtn')
const headerMenu = document.querySelector('.headerMenu')
headerBtn.addEventListener('click', hideMenu)


//establecer funcion que mediante el cambio de estilos a la barra de menu lo esconda y lo muestre
    //tambien podria usar un toggle, y haciendolo con clases
function hideMenu () {

    if(headerMenu.style.display != 'block') {
        headerMenu.style.display = 'block'
    } else {
        headerMenu.style.display = 'none'
    }
}






import validator from './validator.js';

console.log(validator);

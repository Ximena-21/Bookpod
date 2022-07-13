const headerBtn = document.querySelector('.headerBtn')
const headerMenu = document.querySelector('.headerMenu')


headerBtn.addEventListener('click', toggleMenu)


//establecer funcion que mediante el cambio de estilos a la barra de menu lo esconda y lo muestre
//tambien podria usar un toggle, y haciendolo con clases
function toggleMenu () {

    headerMenu.classList.toggle('headerMenu--hidden')
}
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


//funcion validar tarjeta
function validateCreditCard (creditCardNumber) {
    
    let arraynumbers = creditCardNumber.split('').reverse().map((x)=>parseInt(x));
    let suma = 0;
    let validate = false;
    

    const newArrayNumbers = arraynumbers.map((element,index )=> {
       
        if (index % 2 !== 0) {          
            element = element*2;
            if (element >= 10){
                const elementList = String(element).split('');
                return element = Number(elementList[0]) + Number(elementList[1]);
            } else {
                return element = element
            }
        } else {
            return element = element;
        };
    });

   
    newArrayNumbers.forEach(element => {
        suma += element;
        return suma;  
    });

    if (suma % 10 === 0 ){
        console.log(!validate);
    } else {
        console.log(validate);
    }
}; 

validateCreditCard("4083952015263")
//funcion que me enmascare todos los digitos menos los ultimos 4
function maskifyCreditCard (creditCardNumber) {
    
    //cortar desde el indice 0 hasta 4 digitos menos desde la ultima posicion
    let transformCCNumber = creditCardNumber.slice(0, -4);
    
    //corta los digitos que no se van a transformar 
    let noTransformCCNumber = creditCardNumber.slice(-4);
    

    //convertir transformCCNumber, a array(split(''))y cambiar c/digito por #, mediante el metodo de array map (genera un nuevo array)
    const transformCCNumberArray = transformCCNumber.split('').map((number) => {
        number = '#';
        return number
        // console.log(number)
    });

    //haciendo uso del .join, hace lo contrario de split, cambia un array a una cadena de texto
    const maskedNumber = transformCCNumberArray.join('');
    
    //usando el metodo .concat concatenamos texto 
    // return maskedNumber.concat(noTransformCCNumber)
    console.log(maskedNumber.concat(noTransformCCNumber))

};

maskifyCreditCard("4083952015263") 
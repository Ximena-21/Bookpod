import validator from '../validator.js';
    
const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan'))
// console.log(selectedPlan)
const imgSuscription = document.querySelector('.imgSuscription')
const btnUseCode = document.querySelector('.btn_use')
const textSubtotal = document.querySelector('.subTotal')
const textTotal = document.querySelector('.total')
const textDescount = document.querySelector('.descount')
const textSuscription = document.querySelector('.textSuscription')


const codeDescount = {
    laboratoria2022: 12990,
    BOG005: 9990,
    l4b0r4tor14: 21990,
}


calcCart()

function calcCart () {
    
    const priceSuscription =  selectedPlan.price
    const discountValue = useCode()
    
    const total = priceSuscription - discountValue
    
    imgSuscription.src = selectedPlan.url
    textSuscription.textContent = `Suscripcion Por ${selectedPlan.tittlePlan} Meses`
    textTotal.textContent = `$ ${total}`
    textSubtotal.textContent = `$ ${priceSuscription}`
    textDescount.textContent = `$ ${discountValue}`

}

btnUseCode.addEventListener('click', calcCart)
//funcion que ejecuta el codigo de descuento
function useCode () {
    
    const inputCode = document.querySelector('.input_code')
    const descount = inputCode.value
    

    let valueCodeUse =  codeDescount[descount] 
    
    
    return valueCodeUse || 0
    
}


//VALIDACION TARJETA
// const btnFinalizar = document.querySelector('.btn_buy')
const inputCreditCard = document.querySelector('.inputCreditCar')
const form = document.querySelector('#form')
// const inputs = form.querySelectorAll('input')


//informacion previa de mi usuario
const formData = JSON.parse(localStorage.getItem('formData')) || {}

const nameInput = form.querySelector('[name=name]')
nameInput.value = formData.name

const identificationInput = form.querySelector('[name=identification]')
identificationInput.value = formData.identification

const emailInput = form.querySelector('[name=email]')
emailInput.value = formData.email


// // convertir el objeto en una lista [ [key,value ], [key,value ]]
// const listaFormData = Object.entries(formData)

// console.log(listaFormData)

// //iterar la lista de propiedades
// listaFormData.forEach(propLista => {
// //  como cada elemento iterante es una lista, y el indice 0 era la llave, el indice 1 era el valor
//     const nombrePropiedad = propLista[0]
//     const valorPropiedad = propLista[1]
//     const inputNodoBuscado = form.querySelector(`[name=${nombrePropiedad}]`)

//     inputNodoBuscado.value =  formData[nombrePropiedad] // esto es lo mismo que valorPropiedad
    
// })




form.addEventListener('submit', checkOut)

function checkOut (event) {

    event.preventDefault()

    //guardar data solo si el usuario lo quizo
    const saveInformation = form.querySelector('[name=saveInformation]').checked

    if(saveInformation){

        formData.name = nameInput.value
        formData.indentification = identificationInput.value
        formData.email = emailInput.value

        // inputs.forEach( input =>{
        //     const nombrePropiedad = input.name
        //     const valorPropiedad = input.value
    
        //     formData[nombrePropiedad] = valorPropiedad
    
        // })
    
        localStorage.setItem('formData', JSON.stringify(formData))
    }



    const cardNumber = inputCreditCard.value
    let validate = validator.isValid(cardNumber)
    
    const pagePayment = document.querySelector('.payment')
    const paymentContainer = document.querySelector('.payment_container')

    const msmValidate = document.createElement('div')
    msmValidate.className = 'msmValidate_box'
    
    pagePayment.appendChild(msmValidate)

    const maskNumber = validator.maskify(cardNumber)

    inputCreditCard.value = maskNumber

    if(validate == true) {
        paymentContainer.classList.add('payment--opacity')
        msmValidate.textContent = `Se Ha Completado Tu Suscripcion, De La Tarjeta No. ${maskNumber}`
    } else {
        paymentContainer.classList.add('payment--opacity')
        msmValidate.textContent = `Tu Tarjeta No. ${maskNumber} no Es Valida`
    }


}



/* // inputCreditCard.addEventListener('keydown',hideDigits)
btnFinalizar.addEventListener('click',hideDigits)

function hideDigits () {
    let cardNumber = inputCreditCard.value
        
    const maskNumber = validator.maskify(cardNumber)
    // cardNumber = maskNumber
    console.log(maskNumber)
    // inputCreditCard.write('cambiar los digito')

    //  return maskNumber
    // return validator.maskify(cardNumber)
}    
 */



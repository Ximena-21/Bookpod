import validator from './validator.js';
    
const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan'))
console.log(selectedPlan)
const btnUseCode = document.querySelector('.btn_use')
const textSubtotal = document.querySelector('.subTotal')
const textTotal = document.querySelector('.total')
const textDescount = document.querySelector('.descount')
const textSuscription = document.querySelector('.textSuscription')
textSuscription.textContent = `Suscripcion Por ${selectedPlan.tittlePlan} Meses`
    

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
const btnFinalizar = document.querySelector('.btn_buy')
const inputCreditCard = document.querySelector('.inputCreditCar')


btnFinalizar.addEventListener('click', checkOut)

function checkOut () {

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



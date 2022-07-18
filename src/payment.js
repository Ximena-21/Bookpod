import validator from './validator.js';

/* // const headerBtn = document.querySelector('.headerBtn')
// const headerMenu = document.querySelector('.headerMenu')
// headerBtn.addEventListener('click', toggleMenu)

// function toggleMenu () {
    
    //     headerMenu.classList.toggle('headerMenu--hidden')
    // } */
    
    const plansSuscription = JSON.parse(localStorage.getItem('plansSuscription'))
    console.log(plansSuscription)
    
    // const plan = plansSuscription[0].tittlePlan
    // console.log(plan)
    
    const textSuscription = document.querySelector('.textSuscription')
    textSuscription.textContent = `Suscripcion Por ${plansSuscription.tittlePlan} Meses`
    
    
    
    
    
    // const textSubtotal = document.querySelector('.subTotal')
    // const textTotal = document.querySelector('.total')
    
    
const btnUseCode = document.querySelector('.btn_use')

const codeDescount = [ 
    {code: 'laboratoria2022', descount: 12990},
    {code: 'BOG005', descount: 9990},
    {code: 'l4b0r4tor14', descount: 21990},
    
]


// const plan = localStorage.getItem('plan')
// const priceSubTotal = localStorage.getItem('subTotal')
// // console.log(plan,priceSubTotal)

// textSubtotal.textContent = `$ ${priceSubTotal}`


btnUseCode.addEventListener('click', descount)

//funcion que ejecuta el codigo de descuento
function descount () {
    
    const inputCode = document.querySelector('.input_code')
    const descount = inputCode.value
    const textDescount = document.querySelector('.descount')

    let valueCodeUse = codeDescount.find((element)=>{
        if (element.code == descount ) {

            const valueDescount = element.descount
            return valueDescount
        }
    })
    
    valueCodeUse = valueCodeUse.descount
    textDescount.textContent = `$ ${valueCodeUse}`
    
   /*  function total () {
    
        const total = priceSubTotal - valueCodeUse
    
        textTotal.textContent = `$ ${total}`
    } */
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

    if(validate == true) {
        paymentContainer.classList.add('payment--opacity')
        msmValidate.textContent = `Se Ha Cmpletado Tu Suscripcion`
    } else {
        paymentContainer.classList.add('payment--opacity')
        msmValidate.textContent = `Tu Tarjeta No Es Valida`
    }
}

inputCreditCard.addEventListener('blur',hideDigits, true)

function hideDigits (evento) {
    let cardNumber = inputCreditCard.value

    if (evento.key === 'Enter') {
        
        let maskNumber = validator.maskify(cardNumber)
        cardNumber = maskNumber

        //  return maskNumber
        console.log(cardNumber)
        // return validator.maskify(cardNumber)
    }
}    




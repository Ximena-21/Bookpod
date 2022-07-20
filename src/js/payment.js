import validator from '../validator.js';


//traemos la lista de planes guardada en el localStorage
const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan'))
// console.log(selectedPlan)
const imgSuscription = document.querySelector('.imgSuscription') //imagen payment
const btnUseCode = document.querySelector('.btn_use') 
const textSubtotal = document.querySelector('.subTotal') 
const textTotal = document.querySelector('.total')
const textDescount = document.querySelector('.descount')
const textSuscription = document.querySelector('.textSuscription') // poner el texto del plan selecionado (3,6,12)

//establezco un objeto con unas llaves(codigos de descuento), que seran usados en el input del descuento
const codeDescount = {
    laboratoria2022: 12990,
    BOG005: 9990,
    l4b0r4tor14: 21990,
}

//ejecutamos la funcion, para que al abrir la pagina payment, se vea la informacion del plan seleccionado
calcCart()

//se realiza una funcion que nos permita reescribir los textos de la infromacion del plan seleccionado
function calcCart () {
    //le asiganmos a esta variable el precio del plan seleccionaado
    const priceSuscription =  selectedPlan.price
    //traemos el valor del descuento del codigo usado
    const discountValue = useCode()
    
    //establecemos la operacon dentro de esta variable para obtener el total
    const total = priceSuscription - discountValue
    
    //mediante el uso .textcontent reescribimos el texto de los campos de infromacion del planEscogido
    imgSuscription.src = selectedPlan.url
    textSuscription.textContent = `Suscripcion Por ${selectedPlan.tittlePlan} Meses`
    textTotal.textContent = `$ ${total}`
    textSubtotal.textContent = `$ ${priceSuscription}`
    textDescount.textContent = `$ ${discountValue}`

}

//asiganmos que el boton UseCode nos reescriba de nuevo si se uso un codigo
btnUseCode.addEventListener('click', calcCart)

//funcion que ejecuta el codigo de descuento, y nos retorna el valor de descuento
function useCode () {
    
    const inputCode = document.querySelector('.input_code')
    const descount = inputCode.value
    
    //valor del codigo sera igual al objeto[loQueSeIngresoEnElInput]
    let valueCodeUse =  codeDescount[descount] 
    
    //retorna el valor, pero si no coincider retorna 0
    return valueCodeUse || 0
    
}


//VALIDACION TARJETA

const inputCreditCard = document.querySelector('.inputCreditCar') //input donde va a ingresar el numero de la tarjeta
const form = document.querySelector('#form') //formulario de pago



//informacion previa de mi usuario
    // si al abrir la pagina existe infotmacion guardada la traiga o si no nos retorne un objeto vacio
const formData = JSON.parse(localStorage.getItem('formData')) || {}


//traemos los inputs que queremos que guarde informacion en el localStorage
const nameInput = form.querySelector('[name=name]') //nombre
nameInput.value = formData.name || ""

const identificationInput = form.querySelector('[name=identification]') //identificacion
identificationInput.value = formData.identification

const emailInput = form.querySelector('[name=email]') //email
emailInput.value = formData.email


//al formulario le asganmos el evento submit(enviar), la funcion para validar y enmascarar el numero de la tarjeta
form.addEventListener('submit', checkOut)

//funcion q valida y enmascara el numero de la tarjeta
function checkOut (event) {
    
    //
    event.preventDefault()
    
    //guardar data solo si el usuario lo quizo
        //si el input del formulario esta checkeado
    const saveInformation = form.querySelector('[name=saveInformation]').checked
    
    //si es verdad guarda la informacion
    if(saveInformation){
        
        //formData es el objeto vacio que instanciamos le asigamos una llame y reasiganamos su valor con
            //con  loque se guarde
        formData.name = nameInput.value
        formData.indentification = identificationInput.value
        formData.email = emailInput.value
        
        //enviammos a guardar la informacion en el local
        localStorage.setItem('formData', JSON.stringify(formData))
        }
        
        
        //.......VALIDACION DEL NUMERO DE LA TARJETA..........//
        const cardNumber = inputCreditCard.value
        let validate = validator.isValid(cardNumber)
       
        const pagePayment = document.querySelector('.payment')
        const paymentContainer = document.querySelector('.payment_container')
        
        //se crea un div para guardar el mensaje de validacion
        const msmValidate = document.createElement('div')
        msmValidate.className = 'msmValidate_box'
        // const btnClose = document.createElement('button')
        // btnClose.className = 'btn_close'
        // msmValidate.appendChild(btnClose)
        
        pagePayment.appendChild(msmValidate)
        
        //........ENMASCARAMOS EL NUMERO DE LA TARJETA........//
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
    
    
    
//.................MANERA DINAMICA DE GUARDAR LA INFORMACION DEL FORMULARIO << R E V I Z A R >>...........
   
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

   //...............GUARADAR LA INFORMACION DE LOS INPUTS DE MANERA DINAMICA..........//
   //no uno a uno como lo realice en la linea 100


   // inputs.forEach( input =>{
            //     const nombrePropiedad = input.name
            //     const valorPropiedad = input.value
            
            //     formData[nombrePropiedad] = valorPropiedad
            
            // })

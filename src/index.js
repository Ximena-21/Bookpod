//declaramos en una lista con objetos los planes de suscription
const plans = [
    {
        tittlePlan: "3",
        month: "Mesess",
        suscription: "De Suscripcion",
        price: 79990,
        url: 'img/imgSuscription.jpg',
    },
    {
        tittlePlan: "6",
        month: "Mesess",
        suscription: "De Suscripcion",
        price: 137990,
        url: 'img/imgSuscription.jpg',
    },
    {
        tittlePlan: "12",
        month: "Mesess",
        suscription: "De Suscripcion",
        price: 239990,
        url: 'img/imgSuscription.jpg',
    }
]

//realizamos una funcion que nos permita renderizar todos los planes
function renderPlan () {
    
    const sectionPlans = document.querySelector('.plans_containerCards')

    plans.forEach((plan)=>{

        const cardBox = document.createElement('div')
        cardBox.className = 'plans_card card'
        
        const contentCards = `
            <span class="card_textMonth threeMonths">${plan.tittlePlan}</span>
            <span class="card_month">${plan.month}</span>
            <span class="card_suscription">${plan.suscription}</span>
            <span class="card_price">$ ${plan.price}</span>
            <button class="btn_suscription">Suscribirme</button>
        `
        
        cardBox.innerHTML = contentCards
        sectionPlans.appendChild(cardBox)  

        const btnSuscription = cardBox.querySelector('.btn_suscription')

        //asiganamos a cada boton de los planes para que al darle click nos redireccione al formulario de pago
        btnSuscription.addEventListener('click', () => {
           //guaradammos toda la lista de los planes en el localStorage para luego usar esta informacion 
           // en la pagina de pago
            localStorage.setItem('selectedPlan', JSON.stringify(plan))
            location.href = '../pages/payment'

        })
    })    
}


//dejamos ejecutadad la funcion, para que al abrir la pagina esten renderizadas
renderPlan()
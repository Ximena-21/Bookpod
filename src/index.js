// import validator from './validator.js';

// const plansBtn = document.querySelector('#plans')

const plans = [
    {
        tittlePlan: "3",
        month: "Mesess",
        suscription: "De Suscripcion",
        price: 79990,
        id: 0,
    },
    {
        tittlePlan: "6",
        month: "Mesess",
        suscription: "De Suscripcion",
        price: 137990,
        id: 0,
    },
    {
        tittlePlan: "12",
        month: "Mesess",
        suscription: "De Suscripcion",
        price: 239990,
        id: 0,
    }
]


function renderPlan () {
    
    // let plan = plans[actualPlan]
    const sectionPlans = document.querySelector('.plans_containerCards')

    plans.forEach((plan)=>{

        const cardBox = document.createElement('div')
        cardBox.className = 'plans_card card'
        
        const contentCards = `
            <span class="card_textMonth threeMonths">${plan.tittlePlan}</span>
            <span class="card_month">${plan.month}</span>
            <span class="card_suscription">${plan.suscription}</span>
            <span class="card_suscription">$ ${plan.price}</span>
            <button class="btn_suscription">Suscribirme</button>
        `
        
        cardBox.innerHTML = contentCards
        sectionPlans.appendChild(cardBox)  

        const btnSuscription = cardBox.querySelector('.btn_suscription')

        btnSuscription.addEventListener('click', () => {
            location.href = '/payment'
            // const planSelect = evento.parentElement
            // console.log(evento)
        })

        // const selectPlan = plan.tittlePlan
        // localStorage.setItem('selectPlan', plan)

        // const pricePlan = plan.price
        // localStorage.setItem('pricePlan', subtotal)
        
    })    
}

renderPlan()


localStorage.setItem('plansSuscription', JSON.stringify(plans))


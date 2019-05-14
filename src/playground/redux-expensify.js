import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

const demoState = {
    cookers: [{
        id: 0,
        name: 'Maria Lúcia da Silva',
        sex: 'female',
        birth: 24051967,
        email: 'marachelles@hotmail.com',
        meals: [],
        bio: 'professora aposentada',
        addressLine1: 'rua orides gemente',
        adressLine2: '',
        addressNumber: 650,
        adressZip: 18120000,
        picture: '',
        nationality: 'brasileira',
        accountBank: 'santander',
        accountAgency: 87651,
        accountNumber: 0,
        rating: 0
    }],
    consumers: [{
        id: 35593586802,
        name: 'Luís Felipe Spínola',
        sex: 'male',
        birth: 23091989,
        email: 'lfspinola@hotmail.com',
        bio: 'estudante de eng. de software',
        addressLine1: 'rua orides gemente',
        adressLine2: '',
        addressNumber: 650,
        adressZip: 18120000,
        picture: '',
        nationality: 'brasileiro',
        accountBank: 'nubank',
        accountAgency: 87651,
        accountNumber: 0,
        creditCard: [],
        ratings: []
    }],
    meals: [{
        name: 'Baião de Dois',
        description: 'Arroz, feijão de corda, carne seca, queijo coalho e coentro',
        price: 1800,
        available: 5,
        delivery: {
            courrier: true,
            pickUp: true,
            table: true,
            frozen: true
        },
        serviceStart: 1100,
        serviceEnd: 1400,
        picture: ''
    }]
}

// Actions

// ADD_MEAL
const addMeal = (
    {
    name = '',
    description = '',
    price = 0,
    available = 0,
    delivery = {
        courrier: false,
        pickUp: false,
        table: false,
        frozen: false
    },
    serviceStart = 0,
    serviceEnd = 0,
    picture = ''
    } = {}
) => ({
    type: 'ADD_MEAL',
    meal: {
        id: uuid(),
        name,
        description,
        price,
        available,
        delivery,
        serviceStart,
        serviceEnd,
        picture
    }
})
// REMOVE_MEAL
const removeMeal = ({ id }) => ({
    type: 'REMOVE_MEAL',
    id
})
// EDIT_MEAL
const editMeal = (id, updates) => ({
    type: 'EDIT_MEAL',
    id,
    updates
})
//ADD_COOKER
const addCooker = (
    {
        id = 0,
        name = '',
        sex = '',
        birth = 0,
        email = '',
        meals = [],
        bio = '',
        addressLine1 = '',
        adressLine2 = '',
        addressNumber = 0,
        adressZip = 0,
        picture = '',
        nationality = '',
        accountBank = '',
        accountAgency = 0,
        accountNumber = 0,
        rating = 0
    } = {}
) => ({
    type: 'ADD_COOKER',
    cook: {
        id,
        name,
        sex,
        birth,
        email,
        meals,
        bio,
        addressLine1,
        adressLine2,
        addressNumber,
        adressZip,
        picture,
        nationality,
        accountBank,
        accountAgency,
        accountNumber,
        rating
    }
})
//ADD_CONSUMER
const addConsumer = (
    {
        name = '',
        description = '',
        price = 0,
        available = 0,
        delivery = {
            courrier: false,
            pickUp: false,
            table: false,
            frozen: false
        },
        serviceStart = 0,
        serviceEnd = 0,
        picture = ''
    } = {}
) => ({
    type: 'ADD_MEAL',
    meal: {
        id: uuid(),
        name,
        description,
        price,
        available,
        delivery,
        serviceStart,
        serviceEnd,
        picture
    }
})

// Partners Reducer
const partnersReducerDefaultState = []
const partnersReducer = (state = partnersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_COOKER':
            return [...state, action.cooker]
        case 'ADD_CONSUMER':
            return [...state, action.consumer]
        default:
            return state
    }
}

// Meals Reducer
const mealsReducerDefaultState = []
const mealsReducer = (state = mealsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MEAL':
            return [...state, action.meal]
        case 'REMOVE_MEAL':
            return state.filter(({ id }) => (
                id !== action.id
            ))
        case 'EDIT_MEAL':
            return state.map((meal) => {
                if (meal.id === action.id) {
                    return {
                        ...meal,
                        ...action.updates
                    }
                } else {
                    return meal
                }
            })
        default:
            return state
    }
}

// Store Creation
const store = createStore(
    combineReducers({
        cookers: partnersReducer,
        consumers: partnersReducer,
        meals: mealsReducer
    })
)

store.subscribe(() => {
    console.log(store.getState())
})

// const mealOne = store.dispatch(addMeal(demoState.meals[0]))
// store.dispatch(editMeal(mealOne.meal.id, { price: 2800 }))
// store.dispatch(removeMeal(mealOne.meal))

store.dispatch(addCooker(demoState.cookers[0]))
console.log(demoState.cookers[0])
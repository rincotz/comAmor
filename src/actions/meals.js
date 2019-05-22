import db from '../firebase/firebase'
import {ADD_MEAL, EDIT_MEAL, REMOVE_MEAL, SET_MEALS} from "./constants";

// ADD_MEAL
export const addMeal = (meal) => ({
    type: ADD_MEAL,
    meal
})

export const startAddMeal = (mealData = {}) => {
    return (dispatch) => {
        const {
            name,
            description,
            price,
            available,
            location,
            courrier,
            courrierStart,
            courrierEnd,
            pickUp,
            pickUpStart,
            pickUpEnd,
            table,
            tableStart,
            tableEnd,
            frozen,
            picture = ''
        } = mealData
        const meal = {
            name,
            description,
            price,
            available,
            location,
            courrier,
            courrierStart,
            courrierEnd,
            pickUp,
            pickUpStart,
            pickUpEnd,
            table,
            tableStart,
            tableEnd,
            frozen,
            picture
        }

        return db.collection('meals')
            .add(meal)
            .then((docRef) => {
                dispatch(addMeal({
                    id: docRef.id,
                    ...meal
                }))
            })
    }
}

// EDIT_MEAL
export const editMeal = (id, updates) => ({
    type: EDIT_MEAL,
    id,
    updates
})

// REMOVE_MEAL
export const removeMeal = ({ id }) => ({
    type: REMOVE_MEAL,
    id
})

// SET_MEALS
export const setMeals = (meals) => ({
    type: SET_MEALS,
    meals
})

export const startSetMeals = () => {
    return (dispatch) => {
        return db.collection('meals')
            .get()
            .then((querySnapshot) => {
                const meals = []
                querySnapshot.forEach((doc) => {
                    meals.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                dispatch(setMeals(meals))
            })
    }
}
import uuid from 'uuid'
import { ADD_MEAL, EDIT_MEAL, REMOVE_MEAL } from "./constants";

// ADD_MEAL
export const addMeal = ({
    id,
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
    picture =''
}) => ({
    type: ADD_MEAL,
    meal: {
        id: uuid(),
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
})

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
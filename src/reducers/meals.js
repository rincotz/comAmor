import { ADD_MEAL, EDIT_MEAL, REMOVE_MEAL } from "../actions/constants";

// Meals Reducer
const mealsReducerDefaultState = []
export default (state = mealsReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_MEAL:
            return [...state, action.meal]
        case REMOVE_MEAL:
            return state.filter(({ id }) => (
                id !== action.id
            ))
        case EDIT_MEAL:
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
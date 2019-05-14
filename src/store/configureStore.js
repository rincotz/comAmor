import { combineReducers, createStore } from "redux";
import mealsReducer from '../reducers/meals'
import partnersReducer from '../reducers/partners'

// Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            partners: partnersReducer,
            meals: mealsReducer
        })
    )
    return store
}

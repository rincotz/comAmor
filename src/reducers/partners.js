import { ADD_PARTNER, EDIT_PARTNER, REMOVE_PARTNER } from "../actions/constants"

// Partners reducer
const partnersReducerDefaultState = []
export default (state = partnersReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_PARTNER:
            return [...state, action.partner]
        case REMOVE_PARTNER:
            return state.filter(({ uid }) => (
                uid !== action.uid
            ))
        case EDIT_PARTNER:
            return state.map((partner) => {
                if (partner.uid === action.uid) {
                    return {
                        ...partner,
                        ...action.updates
                    }
                } else {
                    return partner
                }
            })
        default:
            return state
    }
}
import db from '../firebase/firebase'
import { ADD_PARTNER, EDIT_PARTNER, REMOVE_PARTNER } from "./constants";

// ADD_PARTNER
export const addPartner = (partner) => ({
    type: ADD_PARTNER,
    partner
})

export const startAddPartner = (partnerData = {}) => {
    return (dispatch) => {
        const {
            id,
            name,
            gender,
            birth,
            email,
            phone,
            bio,
            nationality,
            addressLine1,
            addressLine2 = '',
            number,
            neighborhood,
            zip,
            picture = ''
        } = partnerData
        const partner = {
            id,
            name,
            gender,
            birth,
            email,
            phone,
            bio,
            nationality,
            addressLine1,
            addressLine2,
            number,
            neighborhood,
            zip,
            picture,
        }

        return db.collection('partners')
            .add(partner)
            .then((docref) => {
                dispatch(addPartner({
                    uid: docref.id,
                    ...partner
                }))
        })
    }
}

//EDIT_PARTNER
export const editPartner = (uid, updates) => ({
    type: EDIT_PARTNER,
    uid,
    updates
})

//REMOVE_PARTNER
export const removePartner = ({ uid }) => ({
    type: REMOVE_PARTNER,
    uid
})
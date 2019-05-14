import uuid from 'uuid'
import { ADD_PARTNER, EDIT_PARTNER, REMOVE_PARTNER } from "./constants";

// ADD_PARTNER
export const addPartner = ({
    uid,
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
    picture = '',
}) => ({
    type: ADD_PARTNER,
    partner: {
        uid: uuid(),
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
        picture
    }
})

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
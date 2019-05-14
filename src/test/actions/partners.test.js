import { addPartner, editPartner, removePartner } from "../../actions/partners"
import { ADD_PARTNER, EDIT_PARTNER, REMOVE_PARTNER } from "../../actions/constants";

test('should setup add partner action object with provided values', () => {
    const partnerData = {
        id: '355.935.868-02',
        name: 'Luís Felipe',
        gender: 'male',
        birth: 0,
        email: 'lfspinola@hotmail.com',
        phone: '11992893976',
        bio: 'estudante de engenharia de software',
        nationality: 'brasileira',
        addressLine1: 'rua orides gemente',
        addressLine2: '',
        number: 650,
        neighborhood: 'jardim oriental',
        zip: '18120-000',
        picture: ''
    }
    const action = addPartner(partnerData)
    expect(action).toEqual({
        type: ADD_PARTNER,
        partner: {
            uid: expect.any(String),
            ...partnerData
        }
    })
})

test('should setup edit partner action object', () => {
    const action = editPartner('123abc', {bio: 'empresário brasileiro'})
    expect(action).toEqual({
        type: EDIT_PARTNER,
        uid: '123abc',
        updates: {
            bio: 'empresário brasileiro'
        }
    })
})

test('should setup remove partner action object', () => {
    const action = removePartner({ uid: '456def' })
    expect(action).toEqual({
        type: REMOVE_PARTNER,
        uid: '456def'
    })
})
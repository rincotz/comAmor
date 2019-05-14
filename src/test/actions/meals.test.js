import { addMeal, editMeal, removeMeal } from "../../actions/meals"
import { ADD_MEAL, EDIT_MEAL, REMOVE_MEAL } from "../../actions/constants";

test('should setup add expense action object with provided values', () => {
    const mealData = {
        name: 'pf de frango',
        description: 'arroz, feijões e filé de frango',
        price: 1000,
        available: 5,
        location: '',
        courrier: true,
        courrierStart: 0,
        courrierEnd: 0,
        pickUp: false,
        pickUpStart: undefined,
        pickUpEnd: undefined,
        table: false,
        tableStart: undefined,
        tableEnd: undefined,
        frozen: false,
        picture: ''
    }
    const action = addMeal(mealData)
    expect(action).toEqual({
        type: ADD_MEAL,
        meal: {
            id: expect.any(String),
            ...mealData
        }
    })
})

test('should setup edit meal action object', () => {
    const action = editMeal('123abc', {description: 'filé de frango empanado e frito'})
    expect(action).toEqual({
        type: EDIT_MEAL,
        id: '123abc',
        updates: {
            description: 'filé de frango empanado e frito'
        }
    })
})

test('should setup remove meal action object', () => {
    const action = removeMeal({ id: '456def' })
    expect(action).toEqual({
        type: REMOVE_MEAL,
        id: '456def'
    })
})
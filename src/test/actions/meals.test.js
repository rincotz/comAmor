import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddMeal, addMeal, editMeal, removeMeal, setMeals} from "../../actions/meals"
import {ADD_MEAL, EDIT_MEAL, REMOVE_MEAL, SET_MEALS} from "../../actions/constants";
import meals from '../fixtures/meals'
import db from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should setup add expense action object with provided values', () => {
    const action = addMeal(meals[0])
    expect(action).toEqual({
        type: ADD_MEAL,
        meal: {
            id: expect.any(String),
            ...meals[0]
        }
    })
})

test('should add meal to database and store', (done) => {
    const store = createMockStore({})
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
        pickUpStart: 0,
        pickUpEnd: 0,
        table: false,
        tableStart: 0,
        tableEnd: 0,
        frozen: false,
        picture: ''
    }
    store.dispatch(startAddMeal(mealData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: ADD_MEAL,
            meal: {
                id: expect.any(String),
                ...mealData
            }
        })
        db.collection('meals').doc(actions[0].meal.id).get().then((doc) => {
            expect(doc.data()).toEqual(mealData)
            done()
        })
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

test('should set meal action object with data', () => {
    const action = setMeals(meals)
    expect(action).toEqual({
        type: SET_MEALS,
        meals
    })
})
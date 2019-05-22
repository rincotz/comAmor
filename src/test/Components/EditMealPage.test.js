import React from 'react'
import { shallow } from 'enzyme'
import { EditMealPage } from "../../components/EditMealPage"
import meals from '../fixtures/meals'

let editMeal, startRemoveMeal, history, wrapper

beforeEach(() => {
    editMeal = jest.fn()
    startRemoveMeal = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditMealPage
            meal={meals[2]}
            editMeal={editMeal}
            startRemoveMeal={startRemoveMeal}
            history={history}
        />
    )
})

test('should render EditMealPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

// test('should handle editing meals', () => {
//     wrapper.find('MealForm').prop('onSubmit')(meals[2])
//     expect(history.push).toHaveBeenLastCalledWith('/')
//     expect(editMeal).toHaveBeenLastCalledWith(meals[2].id, meals[2])
// })

// test('should handle startRemoveMeal', () => {
//     wrapper.find('button').simulate('click')
//     expect(history.push).toHaveBeenLastCalledWith('/')
//     expect(startRemoveMeal).toHaveBeenLastCalledWith({ id: meals[2].id })
// })
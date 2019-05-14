import React from 'react'
import { shallow } from 'enzyme/build'
import { AddMealPage } from "../../components/AddMealPage";
import meals from '../fixtures/meals'

let addMeal, history, wrapper

beforeEach(() => {
    addMeal = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddMealPage addMeal={addMeal} history={history} />)
})

test('should render AddPartnerPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('MealForm').prop('onSubmit')(meals[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addMeal).toHaveBeenLastCalledWith(meals[1])
})
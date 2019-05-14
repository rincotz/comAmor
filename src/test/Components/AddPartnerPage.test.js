import React from 'react'
import { shallow } from 'enzyme/build'
import { AddPartnerPage } from "../../components/AddPartnerPage"
import partners from '../fixtures/partners'

let addPartner, history, wrapper

beforeEach(() => {
    addPartner = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddPartnerPage addPartner={addPartner} history={history} />)
})

test('should render AddPartnerPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('PartnerForm').prop('onSubmit')(partners[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addPartner).toHaveBeenLastCalledWith(partners[1])
})
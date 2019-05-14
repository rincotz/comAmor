import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../components/Footer'

test('should render Header correctly', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
})
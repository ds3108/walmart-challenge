import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

describe('Product', () => {
  test('should render', () => {
    const wrapper = shallow(<Product  />);
    expect(wrapper).toMatchSnapshot();
  })
})
import React from 'react'
import { shallow } from 'enzyme'
import NavBar from './NavBar'

describe('NavBar', () => {
  test('should render', () => {
    const wrapper = shallow(<NavBar  />);
    expect(wrapper).toMatchSnapshot();
  })
})
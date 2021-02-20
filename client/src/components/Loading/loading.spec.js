import React from 'react'
import { shallow } from 'enzyme'
import Loading from './loading'

describe('Loading', () => {
  test('should render', () => {
    const wrapper = shallow(<Loading  />);
    expect(wrapper).toMatchSnapshot();
  })
})
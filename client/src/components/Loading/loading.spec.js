import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Loading from './loading';
describe("<Loading />", () => {
  it("Renders <Loading /> component correctly", () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId('loading')).toBeInTheDocument();
  });
});
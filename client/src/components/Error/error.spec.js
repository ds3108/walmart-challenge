import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Error from './error';
describe("<Error />", () => {
  it("Renders <Error /> component correctly", () => {
    const { getByText } = render(<Error />);
    expect(getByText(/Ups, algo ha pasado../i)).toBeInTheDocument();
  });
});
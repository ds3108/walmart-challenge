import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Navbar from './NavBar';
describe("<Navbar />", () => {
  it("Renders <Navbar /> component correctly", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/Buscar/i)).toBeInTheDocument();
  });
});
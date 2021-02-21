import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Product from './Product';
describe("<Product />", () => {
  it("Renders <Product /> component correctly", () => {
    const baseProps = {
      info: { image: 'Test', brand: 'Test', id: 1000, description: 'Test', price: 10000 }, isPalyndrom: false
    }
    const { getByText } = render(<Product {...baseProps} />);
    expect(getByText(/Agregar/i)).toBeInTheDocument();
  });
});
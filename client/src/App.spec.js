import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchHelper from './helpers/fetch-helper';


describe("Modal", () => {
  beforeEach(function () {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      results: [{
        _id: "603283a84b701543233c68c3",
        id: 2,
        brand: "dsaasd",
        description: "zlrwax bñyrh",
        image: "www.lider.cl/catalogo/images/babyIcon.svg",
        price: 130173
      }], palyndromSearch: false, error: undefined
    }));
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
import React from 'react';
import { shallow, render } from "enzyme";
import Navbar from './Navbar/Navbar';
// import { render, screen } from '@testing-library/react';

describe('Navbar', () => {

    let wrapper;
    beforeEach(() => wrapper = shallow(<Navbar />));

    it('should render a <div />', () => {
        expect(wrapper.find('nav').length).toEqual(1);
      });

});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
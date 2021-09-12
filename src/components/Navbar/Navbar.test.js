import React from 'react';
import { shallow, render } from "enzyme";
import Navbar from './Navbar';
// import { render, screen } from '@testing-library/react';

describe('Navbar', () => {

    let wrapper;
    beforeEach(() => wrapper = shallow(<Navbar />));

    it('should render a nav <div />', () => {
        expect(wrapper.find('nav').length).toEqual(1);
      });

    it('should render a <div /> with classname logo', () => {
      expect(wrapper.find('.logo').length).toEqual(1);
    });

});
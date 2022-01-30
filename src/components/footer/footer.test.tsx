import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Footer from './footer';

test('Expect componet to be created', () => {
    expect(Footer).toBeTruthy()
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
});
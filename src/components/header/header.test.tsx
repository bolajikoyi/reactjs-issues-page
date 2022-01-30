import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Header from './header';

test('Expect componet to be created', () => {
    expect(Header).toBeTruthy()
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Loading from './loading';


test('Expect componet to be created', () => {
    expect(Loading).toBeTruthy()
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div);
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Main from './main';

test('Expect componet to be created', () => {
    expect(Main).toBeTruthy()
});

// test('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Main />, div);
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import SubHeader from './subHeader';


test('Expect componet to be created', () => {
    expect(SubHeader).toBeTruthy()
});

// test('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<SubHeader />, div);
// });

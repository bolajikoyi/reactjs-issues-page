import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import TopMessage from './topMessage';


test('Expect componet to be created', () => {
    expect(TopMessage).toBeTruthy()
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopMessage />, div);
});

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import TopMessage from './topMessage';

afterEach(cleanup);

describe('TopMessage Component', ()=> {
    test('Expect componet to be created', async () => {
        expect(TopMessage).toBeTruthy()
    });
    
    test('renders without crashing', async () => {
        const div = document.createElement('div');
        ReactDOM.render(<TopMessage />, div);
    });
})


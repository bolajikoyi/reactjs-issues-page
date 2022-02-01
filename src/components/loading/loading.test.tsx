import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Loading from './loading';

afterEach(cleanup);

describe('Loading Component', ()=> {
    test('Expect componet to be created', async () => {
        expect(Loading).toBeTruthy()
    });
    
    test('renders without crashing', async () => {
        const div = document.createElement('div');
        ReactDOM.render(<Loading />, div);
    });
})

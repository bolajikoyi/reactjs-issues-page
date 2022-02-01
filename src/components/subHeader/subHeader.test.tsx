import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import SubHeader from './subHeader';

afterEach(cleanup);

describe('SubHeader Component', ()=> {
    test('Expect componet to be created', async () => {
        expect(SubHeader).toBeTruthy()
    });
})


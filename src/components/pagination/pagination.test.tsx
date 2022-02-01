/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Pagination from './pagination';

afterEach(cleanup);

describe('Pagination Component', ()=>{

    test('Expect component to be created', async () => {
        expect(Pagination).toBeTruthy()
    });
})


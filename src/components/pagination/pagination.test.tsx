/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Pagination from './pagination';


describe('Pagination Component', ()=>{

    test('Expect component to be created', async () => {
        expect(Pagination).toBeTruthy()
    });
})


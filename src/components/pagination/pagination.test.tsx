/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Pagination from './pagination';


test('Expect componet to be created', () => {
    expect(Pagination).toBeTruthy()
});

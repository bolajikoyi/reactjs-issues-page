import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import IssueHeader from './issueHeader';


test('Expect componet to be created', () => {
    expect(IssueHeader).toBeTruthy()
});

// test('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<IssueHeader />, div);
// });
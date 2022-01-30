import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import IssueList from './issueList';


test('Expect componet to be created', () => {
    expect(IssueList).toBeTruthy()
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IssueList />, div);
});
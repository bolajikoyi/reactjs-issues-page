import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import IssueList from './issueList';

afterEach(cleanup);

describe('IssueList Component', ()=> {
    test('Expect component to be created', async () => {
        expect(IssueList).toBeTruthy()
    });
    
    test('renders without crashing', async () => {
        const div = document.createElement('div');
        ReactDOM.render(<IssueList />, div);
    });
})

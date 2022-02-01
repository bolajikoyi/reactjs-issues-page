import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import IssueHeader from './issueHeader';

afterEach(cleanup);

describe('IssueHeader Component', ()=> {
    test('Expect componet to be created', async () => {
        expect(IssueHeader).toBeTruthy()
    });
})

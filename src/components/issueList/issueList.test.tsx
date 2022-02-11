import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import IssueList from './issueList';

afterEach(cleanup);

describe('IssueList Component', () => {
    test('Expect component to be created', () => {
        expect(IssueList).toBeTruthy()
    });
    
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<IssueList index={0} />, div);
    });

    test('matches snapshot', () => {
        const tree = renderer.create(<IssueList index={0}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

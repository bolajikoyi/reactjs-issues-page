import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import SubHeader from './subHeader';

afterEach(cleanup);

let data = {
    totalCount: 100,
    isClosed: true
}

describe('SubHeader Component', ()=> {
    test('Expect componet to be created', async () => {
        render(<SubHeader count={data}/>);
        expect(SubHeader).toBeTruthy();
    });

    test('check if Code, Issues, Pull Request, Actions, Security, and Insights are in the document', ()=> {
        render(<SubHeader count={data}/>);
        expect(screen.getByTestId('code')).toBeInTheDocument();
        expect(screen.getByTestId('issues')).toBeInTheDocument();
        expect(screen.getByTestId('pull-requests')).toBeInTheDocument();
        expect(screen.getByTestId('actions')).toBeInTheDocument();
        expect(screen.getByTestId('security')).toBeInTheDocument();
        expect(screen.getByTestId('insights')).toBeInTheDocument();
    })

    test('matches snapshot', ()=> {
        const tree = renderer.create(<SubHeader count={data}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})


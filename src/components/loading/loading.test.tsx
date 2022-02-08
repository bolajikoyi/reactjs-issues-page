import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Loading from './loading';

afterEach(cleanup);

describe('Loading Component', ()=> {
    test('Expect componet to be created', async () => {
        expect(Loading).toBeTruthy()
    });
    
    test('renders without crashing', async () => {
        const div = document.createElement('div');
        ReactDOM.render(<Loading />, div);
    });

    test('should contain the text "Loading"', ()=>{
        render(<Loading/>);
        expect(screen.getByTestId('loading')).toBeInTheDocument();
    })

    test('matches snapshot', ()=> {
        const tree = renderer.create(<Loading/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

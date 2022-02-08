import React from 'react';
import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import TopMessage from './topMessage';

afterEach(cleanup);

describe('TopMessage Component', ()=> {
    test('Expect componet to be created', async () => {
        expect(TopMessage).toBeTruthy()
    });
    
    test('renders without crashing', async () => {
        const div = document.createElement('div');
        ReactDOM.render(<TopMessage />, div);
    });

    test('matches snapshot', ()=> {
        const tree = renderer.create(<TopMessage />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})


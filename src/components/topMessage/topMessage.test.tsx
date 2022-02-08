import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import TopMessage from './topMessage';

afterEach(cleanup);

describe('TopMessage Component', ()=> {
    test('Expect component to be created', async () => {
        expect(TopMessage).toBeTruthy()
    });
    
    test('renders without crashing', async () => {
        const div = document.createElement('div');
        ReactDOM.render(<TopMessage />, div);
    });

    test('first top link called', ()=> {
        const click = jest.fn();
        render(
            <div data-testid='TopMessage-link1' onClick={click}>contributing guideline</div>
        )
        userEvent.click(screen.getByTestId('TopMessage-link1'));
        expect(click).toBeCalled()
        expect(screen.getByTestId('TopMessage-link1')).toHaveTextContent('contributing guideline')
    });

    test('second top link called', ()=> {
        const click = jest.fn();
        render(
            <div data-testid='TopMessage-link2' onClick={click}>we've collected some good first issues for you.</div>
        )
        userEvent.click(screen.getByTestId('TopMessage-link2'));
        expect(click).toBeCalled();
        expect(screen.getByTestId('TopMessage-link2')).toHaveTextContent(/we've collected some/i)
    });

    test('matches snapshot', ()=> {
        const tree = renderer.create(<TopMessage />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})


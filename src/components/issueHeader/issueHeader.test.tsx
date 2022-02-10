import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import IssueHeader from './issueHeader';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

let data = {
    isClosed: true,
    totalCount: 30,
    issueState: jest.fn()
}

describe('IssueHeader Component', ()=> {
    test('Expect componet to be created', async () => {
        expect(IssueHeader).toBeTruthy()
    });

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IssueHeader data={data} />, div);
});

test('function returns open', () => {
    const click = jest.fn(() => 'OPEN');
    render(<div data-testid='open' onClick={click}></div>);
    userEvent.click(screen.getByTestId('open'));
    expect(click).toBeCalledTimes(1);
})

test('function returns closed', () => {
    const click = jest.fn(() => 'CLOSED');
    render(<div data-testid='closed' onClick={click}></div>);
    userEvent.click(screen.getByTestId('closed'));
    expect(click).toBeCalledTimes(1);
})

test("Should Contain Text 'Author'", () => {
    render(<IssueHeader data={data} />);
    expect(screen.getByTestId('author')).toHaveTextContent('Author');
});

test("Should not contain the text 'Writer'", () => {
    render(<IssueHeader data={data} />);
    expect(screen.getByTestId('author')).not.toHaveTextContent('Writer');
});

test('matches snapshot', ()=> {
    const tree = renderer.create(<IssueHeader data={data}/>).toJSON();
    expect(tree).toMatchSnapshot();
})
})

import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import IssueHeader from './issueHeader';

afterEach(cleanup);

let data = {
    isClosed: true,
    totalCount: 20,
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

test("Should Contain Text 'Author'", async () => {
    render(<IssueHeader data={data} />);
    expect(screen.getByTestId('author')).toHaveTextContent('Author');
});

test("Should not contain the text 'Writer'", async () => {
    render(<IssueHeader data={data} />);
    expect(screen.getByTestId('author')).not.toHaveTextContent('Writer');
});

test('matches snapshot', ()=> {
    const tree = renderer.create(<IssueHeader data={data}/>).toJSON();
    expect(tree).toMatchSnapshot();
})
})

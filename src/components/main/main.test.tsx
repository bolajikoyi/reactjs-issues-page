import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Main from './main';


afterEach(cleanup);

jest.mock('../loading/loading', ()=> (props) => <div {...props}>Loading component mock</div>);
jest.mock('../header/header', ()=> () => <div>Header component mock</div>);
jest.mock('../footer/footer', ()=> () => <div>Footer component mock</div>);
jest.mock('../subHeader/subHeader', ()=> () => <div>SubHeader component mock</div>);
jest.mock('../topMessage/topMessage', ()=> () => <div>TopMessage component mock</div>);
jest.mock('../issueList/issueList', ()=> () => <div>IssueList component mock</div>);
jest.mock('../issueHeader/issueHeader', ()=> () => <div>IssueHeader component mock</div>);
jest.mock('../pagination/pagination', ()=> () => <div>Pagination component mock</div>);


  describe('Main Component', () => {
    test('expect component to be created',async () => {
        expect(Main).toBeTruthy()
    });

    xtest('renders dependent components', () => {
      const {container} = render(<Main/>)
      expect(container.textContent).toMatch('Loading component mock');
      expect(container.textContent).toMatch('Header component mock');
      expect(container.textContent).toMatch('Footer component mock');
      expect(container.textContent).toMatch('SubHeader component mock');
      expect(container.textContent).toMatch('TopMessage component mock');
      expect(container.textContent).toMatch('IssueList component mock');
      expect(container.textContent).toMatch('IssueHeader component mock');
      expect(container.textContent).toMatch('Pagination component mock');
    });

    xtest('matches snapshot', ()=> {
      const tree = renderer.create(<Main/>).toJSON();
      expect(tree).toMatchSnapshot();
  })
  })


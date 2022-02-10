import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock('./components/main/main', () => () => <div>Main component mock</div>)

describe('App component', ()=> {
  test('Expect componet to be created', () => {
    expect(App).toBeTruthy()
  });

  test('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });

  test('renders main component', ()=> {
    const {container} = render(<App/>);
    expect(container.textContent).toMatch('Main component mock');
  })

  test('match snapshot', ()=> {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})




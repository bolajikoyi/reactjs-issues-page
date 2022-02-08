import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Main from './main';


afterEach(cleanup);

  describe('Main Component', ()=>{
    test('expect component to be created',async () => {
        expect(Main).toBeTruthy()
    });

  //   test('matches snapshot', ()=> {
  //     const tree = renderer.create(<Main/>).toJSON();
  //     expect(tree).toMatchSnapshot();
  // })
  })


import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Main from './main';


afterEach(cleanup);

  describe('Main Component', ()=>{
    test('expect component to be created',async () => {
        expect(Main).toBeTruthy()
    });
  })


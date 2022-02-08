/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Pagination from './pagination';

afterEach(cleanup);

let data = {
    pageInfo: {
        endCursor: "Y3Vyc29yOnYyOpHOQwZW6Q==",
        hasNextPage: false,
        hasPreviousPage: true,
        startCursor: "Y3Vyc29yOnYyOpHOP9wfNA==",
        __typename: "PageInfo"
    },
    pagination: jest.fn()
}

describe('Pagination Component', ()=>{

    test('Expect component to be created', async () => {
        render(<Pagination action={data}/>)
        expect(Pagination).toBeTruthy()
    });

    test('previous button is in document and enabled', async () => {
        render(<Pagination action={data}/>)
        expect(screen.getByTestId('previous')).toBeInTheDocument();
        expect(screen.getByTestId('previous')).toBeEnabled();
    });

    test('next button is in document and disabled', async () => {
        render(<Pagination action={data}/>)
        expect(screen.getByTestId('next')).toBeInTheDocument();
        expect(screen.getByTestId('next')).toBeDisabled();
    });

    test('matches snapshot', ()=> {
      const tree = renderer.create(<Pagination action={data}/>).toJSON();
      expect(tree).toMatchSnapshot();
  })
})


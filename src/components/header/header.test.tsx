import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Header from './header';

afterEach(cleanup);

describe('Header Component', ()=>{
    test('Expect componet to be created', () => {
        expect(Header).toBeTruthy()
    });
    
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    });

    test("Should Contain Text 'Search or jump to...'", async () => {
        render(<Header />);
        screen.getByText('Search or jump to...');
    });

    test("Should Contain span tag for 'Search or jump to...' text", async () => {
        render(<Header />);
        expect(screen.getByText("Search or jump to...").tagName).toBe("SPAN");
    });

    test("Should Contain ClassName", async () => {
        render(<Header />);
        expect(screen.getByText("/").className).toBe(
          "Header-search-button"
        );  
      });

})


import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Footer from './footer';

afterEach(cleanup)

describe('Footer Component', ()=>{
    test('expect component to be created', () => {
        expect(Footer).toBeTruthy()
    });
    
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
    });
    
    test("Should Contain Text 'Blog'", async () => {
        render(<Footer />);
        screen.getByText('Blog');
    });

    test("Should Contain span tag for Blog text", async () => {
        render(<Footer />);
        expect(screen.getByText("Blog").tagName).toBe("SPAN");
    });

    test("Should Contain ClassName", async () => {
        render(<Footer />);
        expect(screen.getByText("Blog").className).toBe(
          "blog"
        );  
      });

    test('matches snapshot', ()=> {
        const tree = renderer.create(<Footer/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

})


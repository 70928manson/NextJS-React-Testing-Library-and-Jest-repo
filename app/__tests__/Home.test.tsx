import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
    it('should have Docs text', () => {
        render(<Home />); //Arrange

        const myElement = screen.getByText('Docs'); //Act

        expect(myElement).toBeInTheDocument();
    });

    it('should contain the text "information"', () => {
        render(<Home />); //Arrange

        const myElement = screen.getByText(/information/i); //Act  //case insensitive

        expect(myElement).toBeInTheDocument();
    });

    it('should have a heading', () => {
        render(<Home />); //Arrange

        const myElement = screen.getByRole('heading', {
            name: 'Learn'
        }); //Act  //case insensitive

        expect(myElement).toBeInTheDocument();
    });
})
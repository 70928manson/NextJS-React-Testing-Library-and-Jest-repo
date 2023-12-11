import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

it('should have Docs test', () => {
    render(<Home />) //Arrange

    const myElement = screen.getByText('Docs') //Act

    expect(myElement).toBeInTheDocument();
})
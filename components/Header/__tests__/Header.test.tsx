import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
    //it and test are the same
    it('should render the "Next Todos heading', () => {
        render(<Header title="Next Todos"/>) //ARRANGE

        //ACT
        const header = screen.getByRole('heading', {
            name: "Next Todos"
        })

        expect(header).toBeInTheDocument(); //ASSERT
    })

    test('should render "Manson" as a heading', () => {
        render(<Header title="Manson" />)

        const header = screen.getByRole('heading', {
            name: "Manson"
        })

        expect(header).toBeInTheDocument();
    })
})
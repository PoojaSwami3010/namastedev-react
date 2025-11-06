import { render ,screen} from "@testing-library/react";
import { TestWatcher } from "jest";
import Contact from "../Contact";
import "@testing-library/jest-dom"


TestWatcher("Should Load contact us component",()=>{
    render(<Contact/>)

    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})
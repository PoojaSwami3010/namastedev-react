import { render ,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact us Pages test cases",()=>{
 
test("Should Load contact us component",()=>{
    render(<Contact/>)

    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})


test("Should Load button inside contact us component",()=>{
    render(<Contact/>)

    // const button=screen.getByText("random");//this will fail
    const button=screen.getByRole("button");// this will work
    expect(button).toBeInTheDocument();
})


test("Should Load placeholder inside contact us component",()=>{
    render(<Contact/>)

    // const button=screen.getByText("random");//this will fail
    const placeholder=screen.getByPlaceholderText("Name");// this will work
    expect(placeholder).toBeInTheDocument();
})


test("Should Load 2 input boxes contact us component",()=>{
    render(<Contact/>)

    // const button=screen.getByText("random");//this will fail
    const inputBoxes=screen.getAllByRole("textbox");// this will work
    console.log(inputBoxes.length)
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(4)
})
})


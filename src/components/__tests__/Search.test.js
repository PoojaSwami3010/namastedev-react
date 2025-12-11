import { render, screen } from "@testing-library/react";
import Body from "../Body";
import resData from "../../utils/mockDataforSingleCard";

import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{return Promise.resolve(resData)}
    });
});

it("should render the Body component with serach button",()=>{
    render(<Body/>);

    const searchButton=screen.getByTestId("search-btn");
})
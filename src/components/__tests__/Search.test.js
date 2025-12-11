import { render, screen } from "@testing-library/react";
import Body from "../Body";
import resData from "../../utils/mockDataforSingleCard";
import { act } from "react";

import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{return Promise.resolve(resData)}
    });
});

it("should render the Body component with serach button",async ()=>{   
    await act(async()=> render(
        <BrowserRouter>
         <Body/>
        </BrowserRouter>
   
));
    const searchButton=screen.getByRole("button", { name: "Search"});
    const serachInput=screen.getByTestId("search-input");
    fireEvent.change(serachInput, { target: { value: "dosa" } });
    fireEvent.click(searchButton);
   const cards = screen.getAllByTestId("restaurant-card");
    expect(cards.length).toBe(1);
})
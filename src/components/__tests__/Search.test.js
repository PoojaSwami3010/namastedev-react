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

it("should renderSearch Res List for Dosa text input",async ()=>{   
    await act(async()=> render(
        <BrowserRouter>
         <Body/>
        </BrowserRouter>
   
));
 const cardsBeforeSaerch = screen.getAllByTestId("restaurant-card");
 expect(cardsBeforeSaerch.length).toBe(15);
    const searchButton=screen.getByRole("button", { name: "Search"});
    const serachInput=screen.getByTestId("search-input");
    fireEvent.change(serachInput, { target: { value: "dosa" } });
    fireEvent.click(searchButton);
   const cardsAfterSearch = screen.getAllByTestId("restaurant-card");  
    expect(cardsAfterSearch.length).toBe(1);
})
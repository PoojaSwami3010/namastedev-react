import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom"
import resData from "../../utils/mockDataforSingleCard";

// Mock UserContext
jest.mock("../../utils/UserContext", () => {
  return require("react").createContext({ loggedInUser: "Test User" });
});

it("should render RestaurantCard component correctly",()=>{

    render(<RestaurantCard resData={resData}/>)

    const name = screen.getByText("Samudra Veg"); 
    expect(name).toBeInTheDocument(); 

})

it("should render restaurantcard with promoted label",()=>{
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    
    render(<PromotedRestaurantCard resData={resData}/>);
    
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
})

it("should display restaurant cuisines",()=>{
    render(<RestaurantCard resData={resData}/>)
    
    const cuisinesText = screen.getByText("Veg");
    expect(cuisinesText).toBeInTheDocument();
})

it("should display restaurant rating",()=>{
    render(<RestaurantCard resData={resData}/>)
    
    const rating = screen.getByText("4.4");
    expect(rating).toBeInTheDocument();
})
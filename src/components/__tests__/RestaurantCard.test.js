import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom"
import resData from "../../utils/mockDataforSingleCard";


it("should render RestaurantCard component correctly",()=>{

    render(<RestaurantCard resData={resData}/>)

 const name=   screen.getByText("Samudra Veg"); 
 expect(name).toBeInTheDocument(); 

})
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore =configureStore({
    // multiple reducers will come in this reducer

    reducer:{
        cart:cartReducer,
        

    }

});



export default appStore;
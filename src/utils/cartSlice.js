import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    // here we have multiple reducres 
    reducers:{
        adddItem:(state,action)=>{

            // Vanila (older) Redux=>Dont mutate state
            // const newState=[...state]
            // newState.push(action.payload)

            // mutating the state here
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            // removing last item for now
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0//[]
        }
    }
});

export const {adddItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;
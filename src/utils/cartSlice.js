import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        adddItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            // removing last item for now
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0
        }
    }
});

export const {adddItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:['burger','pizza']
    },
    reducers:{
        adddItem:(state,action)=>{
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
import { createSlice, current } from "@reduxjs/toolkit";

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

            // Redux tookkit uses immer Bts

            // mutating the state here
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            // removing last item for now
            state.items.pop();
        },
        clearCart:(state)=>{
            // console.log(state)
            // console.log(current(state))
            // state=[]
            // console.log(state) this wont work it update state localy only state
            // we can return empty array also return [];
            // RTK says mutated the existing state or return new state
            // retrun [];
            state.items.length=0//state=[] this will update globally
        }
    }
});

export const {adddItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;
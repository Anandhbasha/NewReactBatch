import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice(
    {
        name:"cart",
        initialState:{
            cart:[],
            sidebar:false,

        },
        reducers:{
            toggleSideBar:(state)=>state.sidebar!=state.sidebar,
            addCart:(state,action)=>{
            const item = state.cart.find((i)=>i.id===action.payload.id)
            if(item){
                item.qty=(item.qty || 1) + 1
            }
            else{
               state.cart.push({
                ...action.payload,
                qty:1
               }) 
            }
        },
        increaseQty: (state, action) => {
            const id = typeof action.payload === "object" ? action.payload.id : action.payload;
            const item = state.cart.find((i) => i.id === id);
            
            if (item) {
                item.qty = (item.qty || 1) + 1;
            }
            },
            decreaseQty: (state, action) => {
            const id = typeof action.payload === "object" ? action.payload.id : action.payload;
            const item = state.cart.find((i) => i.id === id);
            
            if (item && item.qty > 1) {
                item.qty -= 1;
            }
        },
        remove:(state,action)=>{
            state.cart= state.cart.filter(i=>i.id!=action.payload)
        }
        }
        
    }
)

export const{remove,decreaseQty,increaseQty,addCart,toggleSideBar} = cartSlice.actions
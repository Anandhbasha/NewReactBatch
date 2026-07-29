import { createSlice } from "@reduxjs/toolkit";

// npm i react-redux @reduxjs/toolkit
export const userSlice = createSlice(
    {
        name:"user",
        initialState:{count:0},
        reducers:{
            increment:(state,action)=>{state.count+=action.payload},
            decrement:(state,action)=>{state.count-=action.payload},
            reset:(state)=>{state.count=0}
        }
    }
)

export const {increment,decrement,reset} = userSlice.actions
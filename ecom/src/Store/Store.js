import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../Slices/AuthSlice";
import { cartSlice } from "../Slices/CartSlice";

export const store = configureStore(
    {
        reducer:{
            auth:AuthSlice.reducer,
            carts:cartSlice.reducer
        }
    }
)
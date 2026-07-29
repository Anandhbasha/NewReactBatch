import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../Slice/Slice";

export const Store = configureStore(
    {
        reducer:{
            users:userSlice.reducer
    }
}
)
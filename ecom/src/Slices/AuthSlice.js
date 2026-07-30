import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice(
    {
        name:"auth",
        initialState:{islogin: false,
    username:""},
        reducers:{
            login:(state,action)=>{state.islogin = true
                state.username=action.payload
            },
            logout:(state,action)=>{state.islogin=false
                state.username=""
            }
        }
    }
)
export const {login,logout} = AuthSlice.actions
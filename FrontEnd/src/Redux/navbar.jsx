import { createSlice } from "@reduxjs/toolkit";

export const slice =new createSlice({
    name : "Navbar",
    initialState:{
        currentpage :'Friends',

    },
    reducers:
    {
     setpage:(state ,payload)=>{
        console.log("paylo",payload)
        state.currentpage=payload.payload
     }
    }
})
export const { setpage } = slice.actions;

export default slice.reducer; 


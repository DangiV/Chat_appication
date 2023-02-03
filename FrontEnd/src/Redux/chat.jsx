import { createSlice } from "@reduxjs/toolkit";

export const chat =new createSlice({
    name : "chat",
    initialState:{
        list :[]

    },
    reducers:
    {
        addMessage:(state ,payload)=>{
        state.list.push(payload.payload)
     },
     deleteMessage : (state,payload) => {
        let data = state.list

        data = data.filter((data,index)=>{
            return index !== payload.payload
        })
        state.list = data
     }
    }
})
export const { addMessage, deleteMessage } = chat.actions;

export default chat.reducer; 

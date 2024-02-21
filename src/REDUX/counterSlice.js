import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0 //initial state value
    },
    reducers:{
        //define actions
        increment:(state)=>{
            state.count+=1; //count=count+1
        },
        decrement:(state)=>{
            state.count-=1; //cont =count-1
        },
        reset:(state)=>{
            state.count=0//
        }
    }
})

export const {increment,decrement,reset}=counterSlice.actions
export default counterSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import slice  from "../Redux/navbar"
import  chat  from "./chat";


const store= configureStore({
    reducer: ({
        nav : slice,
        chat : chat,
        devTools : true
    })
})


export default store
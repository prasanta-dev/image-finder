import { configureStore } from "@reduxjs/toolkit";
import  SearchReducer  from "../features/SearchSlice";
import HomeReducer from "../features/HomeSlice";

export const store = configureStore({
    reducer:{
        search: SearchReducer,
        Home: HomeReducer,
    }
})


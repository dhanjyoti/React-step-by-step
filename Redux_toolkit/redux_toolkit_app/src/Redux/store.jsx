import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './Cardslice';
import productReducer from "./ProductSlice";

const store = configureStore({
    reducer:{
        card:cardReducer,
        product:productReducer,
    }
})

export default store;
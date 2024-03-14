import { configureStore } from "@reduxjs/toolkit";
import sweetSlice from "../feature/sweets/sweetSlice";
import basketSlice from "../basket/basketSlice.js";

export const store = configureStore({
    reducer:{
        sweetState:sweetSlice,
        basketState:basketSlice
    }
});
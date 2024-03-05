import { configureStore } from "@reduxjs/toolkit";
import sweetSlice from "../feature/sweets/sweetSlice";

export const store=configureStore({
    reducer:{
        sweetState:sweetSlice
    }
})
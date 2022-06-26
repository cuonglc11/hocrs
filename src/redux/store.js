import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./photoSlice";
const rootReducer  =  {
    photos : photoReducer
}
const store  = configureStore({
    reducer : rootReducer
})
export default store
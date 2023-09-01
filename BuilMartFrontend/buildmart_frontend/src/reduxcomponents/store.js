import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from './slice';


export default configureStore({
    reducer : {
        logged : loggedReducer
    }
})
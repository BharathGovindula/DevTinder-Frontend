import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReduced from "./feedSlice"
import connectionReducer from "./connectionSlice"
import requestReducer from "./requestSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        feed: feedReduced,
        connections : connectionReducer,
        requests : requestReducer,
    },
})

export default appStore
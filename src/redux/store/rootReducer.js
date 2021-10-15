import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";
import { ServiceSlice } from "../slice/customServiceSlice";


export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    services: ServiceSlice.reducer,
})


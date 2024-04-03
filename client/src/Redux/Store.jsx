import {configureStore} from "@reduxjs/toolkit"
import  useReducer  from "./reducers/user";


const store = configureStore({
    reducer :{
        user : useReducer,
    },
});
export default store;
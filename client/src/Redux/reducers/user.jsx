import { createSlice } from "@reduxjs/toolkit";

const initialState ={
     isAuthenticated : false,
     loading : false,
     error :null,
};

const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        loadUserRequest(){
            state.loading = true;
        },
        loadUserSuccess(state,action){
            state.isAuthenticated=true,
            state.loading =false,
            state.user =action.payload;
        },
        loadUserFail(state,action){
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated =false;
        },
        clearErrors(state,action){
            state.error =null;
        },
    },
});

export const {
    loadUserFail,loadUserRequest,loadUserSuccess,clearErrors
} = userSlice.actions;

export default userSlice.reducer;
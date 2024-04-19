import axios from "axios";
import { loadUserFail, loadUserRequest, loadUserSuccess } from "../reducers/user";
import { server } from "../../server";
export const loadUser = ()=>async(dispatch)=>{
        // higher order fuction
    try{

        dispatch(loadUserRequest())
        console.log("hai")

        const {data}= await axios.get(`${server}/getuser`,{
            withCredentials :true,
        });
   
        dispatch(loadUserSuccess(data.user))
    }catch(error){
            dispatch(loadUserFail(error.response.data.message));
    }
};
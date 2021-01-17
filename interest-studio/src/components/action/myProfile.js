import {v4 as uuidv4} from "uuid";
export const addMyProfoile = ({id,name,university,interests,contact,email,project,password}={})=>({
    type:"ADD_MY_PROFILE",
    myProfile:{
        id:id,
        name,
        university,
        interests,
        contact,
        email,
        project,
        password
    }
   })
export const removeMyProfile=()=>({
    type:"REMOVE_MY_PROFILE",
})  

   
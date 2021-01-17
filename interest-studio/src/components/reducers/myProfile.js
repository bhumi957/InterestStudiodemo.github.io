import React from "react";
const defaultProfile=[]
const myProfile=(state=defaultProfile,action)=>{
    switch(action.type){
        case("ADD_MY_PROFILE"):{
            return [
                action.myProfile
            ]
        }
        case("REMOVE_MY_PROFILE"):{
            return []
        }
        default :
         return state
    }
}
export default myProfile;
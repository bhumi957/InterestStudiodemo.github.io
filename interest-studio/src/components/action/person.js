import {v4 as uuidv4} from "uuid";
export const addperson = ({id,name,password,university,interests,contact,email,project}={})=>({
    type:"ADD_PERSON",
    person:{
        id:id,
        name,
        password,
        university,
        interests,
        contact,
        email,
        project
    }
   })
   export const removePerson=(id)=>({
       type:"REMOVE_PERSON",
       id
   })
   export const addInterest=({
       id,
       field,
       name,
       description,  
       peopleThatFollow
   },personId)=>({
       type:"ADD_INTEREST",
       personId,
       interest:{
           id,
           field,
           name,
           description,
           peopleThatFollow
       }
   })
   export const removeInterest=(personId,interestId)=>({
    type:"REMOVE_INTEREST",
    personId,
    interestId
   })
   export const setId=(id)=>({
       type:"SET_ID",
       id
   })
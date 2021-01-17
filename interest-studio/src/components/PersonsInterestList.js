import React from "react";
import PersonsInterestListItem from "../components/PersonsInterestListItem";
const PersonsInterestList =(props)=>{
    console.log("--");
     console.log(props)
    return props.interests.map((interest)=><PersonsInterestListItem key={interest.id} interest={interest} id={props.id}/>)
}
export default PersonsInterestList;
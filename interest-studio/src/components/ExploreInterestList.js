import React from "react";
import {Link} from "react-router-dom";
import {addInterest} from "./action/person";
import {connect} from "react-redux";
import { addPersonToInterest } from "./action/interest";
const ExploreInterestList =(props)=>{

  return (
    <div className = "interest_list" >

      <Link className = "field_name" style={{ textDecoration: 'none' }} to={`/viewProfile/${props.interest.id}`}><h3 className = "interest_head">{props.interest.name}</h3></Link>
      <h6>{props.interest.description}</h6>
      <button className = "follow" onClick={
        ()=>{
        props.dispatch(addInterest(props.interest,props.myProfile[0].id))
        props.dispatch(addPersonToInterest(props.interest.id,props.myProfile[0]))
      }}>Follow Interest</button>

    </div>
)
}
export default connect()(ExploreInterestList);

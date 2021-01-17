
import {connect} from "react-redux";
import React from "react";
import {Link } from "react-router-dom";
import PersonsInterestList from "./PersonsInterestList"
import {removePersonFromInterest} from "./action/interest";
import { removeInterest } from "./action/person";
import myProfile from "./reducers/myProfile";
const PersonsInterestListItem=(props)=>{
     const isProfile=props.myProfile[0].id === props.id;
     console.log("checkPoint")
     console.log(props.interest)
     return (
        <div className="preson_interest">
         <Link style={{ textDecoration: 'none' }} className="interst_list" to={`/viewProfile/${props.interest.id}`}><h3 >{props.interest.name}</h3></Link>
         <h2>{props.interest.description}</h2>
         {isProfile&&<button className="follow" onClick={()=>{
           props.dispatch(removeInterest(props.myProfile[0].id,props.interest.id))
           props.dispatch(removePersonFromInterest(props.myProfile[0].id,props.interest.id))
         }}>Remove Interest</button>}
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {
        myProfile:state.myProfile
    }
}
export default connect(mapStateToProps)(PersonsInterestListItem)

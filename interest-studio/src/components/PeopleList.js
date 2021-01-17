import React from "react";
import {Link } from "react-router-dom";
import user from "./user.png";
const PeopleList=(props)=>{

    console.log(props)
    return (
        <div className="people_list" >
         <div>
        <h3 className = "name"  key={props.people.name}>Name : {props.people.name}</h3>
        <h4 className = "university" key={props.people.university}>  University : {props.people.university}</h4>
        <h5 className = "Email" >  Email : </h5>
        </div>
        <div className="User">
        <Link className="user" style={{ textDecoration: 'none' }} to={`/profile/${props.people.id}`}><img className="user"src={user}/>view profile</Link>

        </div>
        </div>
    )
}
export default PeopleList;

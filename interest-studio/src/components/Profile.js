import React from "react";
import {connect} from "react-redux";
import Contact from "../components/Contact";
import PersonsInterestList from "../components/PersonsInterestList";
import {removePerson} from "../components/action/person";
import {removeMyProfile} from "../components/action/myProfile";
import {NavLink} from "react-router-dom";
import {invalidateuser} from "./action/authentaction";
import name from "./name.png";
import university from "./university.png";
const Profile=(props)=>{

   const person =props.peoples.filter((people)=>{
     return people.id===props.match.params.id
   });

   const pid=props.myProfile.length === 0 ?"": props.myProfile[0].id;
   const isProfile= pid === props.match.params.id;



   return (
    <div>
      {isProfile && <div>
        <button className="login-signout" onClick={()=>{
          props.dispatch(removePerson(pid))
          props.dispatch(removeMyProfile())
          props.dispatch(invalidateuser())
          props.history.push("/signUp")
       }}>Delete Account</button>
       <button className="login-signout" onClick={()=>{
         props.dispatch(invalidateuser())
         props.history.push("/logIn")

       }}> Sign Out</button>
       <NavLink style={{ textDecoration: 'none' }} className="links"to="/editProfile"> <button className="login-signout">Edit Profile </button></NavLink>
        </div>}
       {person.length !== 0 && (
         <div>
         <p><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>  Name : {person[0].name}</p>
         <p><i class="fa fa-university fa-lg" aria-hidden="true"></i>  University : {person[0].university}</p>
        <h1>Contact : {!person[0].contact?"no contact to show":<Contact contact={person[0].contact} email={person[0].email}/>}</h1>
        <h1>Interest : {person[0].interests.length ===0?"No interest is stilll subscribe":<PersonsInterestList interests={person[0].interests} id={props.match.params.id}/>}</h1>
         </div>
       ) }
    </div>
)
}
const mapStateToProp=(state)=>{

  return {
    peoples:state.person,
    myProfile:state.myProfile
  }
}
export default connect(mapStateToProp)(Profile);

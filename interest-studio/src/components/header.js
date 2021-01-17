import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import myProfile from "./reducers/myProfile";
import interest_studio_logo_1 from "./interest studio.jpg";
import icon from "../ICON.jpg";
import profileIcon from "./profile.png";


const Header=(props)=>{

   const link = props.myProfile.length !== 0 ? `/profile/${props.myProfile[0].id}` :"/";


  return (
    <div>

    <div className="header">

      <NavLink to="/"><img className="logo"src={interest_studio_logo_1}/></NavLink>
    <NavLink to={link} style={{ textDecoration: 'none' }} className="Profile" ><img className="profile"src={profileIcon}  height="50" width="50"/></NavLink>
    </div>
    </div>


)
}
const mapStateToProps=(state)=>{

  return {
   myProfile:state.myProfile
 }
}
export default connect(mapStateToProps)(Header);

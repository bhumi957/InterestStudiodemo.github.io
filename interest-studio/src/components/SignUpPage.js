import React  from "react";
import {v4 as uuidv4} from "uuid";
import {NavLink} from "react-router-dom";
import ProfileForm from "./profileform";
import {addperson} from "./action/person";
import {addMyProfoile} from "./action/myProfile";
import {connect} from "react-redux";
import {validateuser} from "./action/authentaction";
const SignUpPage=(props)=>{

    const redirectToLogin=()=>{
        props.history.push("/logIn")
       }
    return (
        <div className="mainWrapper">
        <div className="signUpWrapper">
        <div className="signUpPage">
        <ProfileForm onSubmit={
            (profile)=>{
              const id=uuidv4();
              console.log(profile)
              const newProfile={...profile,id:id}
              console.log(newProfile)
               props.dispatch(addperson(newProfile))
               props.dispatch(addMyProfoile(newProfile))
               props.dispatch(validateuser())
              props.history.push("/")
            }
        }/>
         </div>
         <div className="loginbtn"><button id="login" onClick={()=>{
            redirectToLogin()
        }}>Login</button></div>
        </div>
       
        </div>
        
    )
}
export default connect()(SignUpPage);

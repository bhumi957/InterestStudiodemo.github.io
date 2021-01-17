import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import { Redirect } from "react-router-dom";
import {addMyProfoile} from "../components/action/myProfile"
import {validateuser} from "./action/authentaction";
import intlogo from "../components/interest studio.jpg"
<script src="https://kit.fontawesome.com/yourcode.js"></script>
class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userName:"",
      password:"",
      error:"",
      id:""
    }
  }
  handleUserNameChange=(e)=>{
    const userName=e.target.value;
    console.log(this.state)
    this.setState(()=>({
      userName
  }))
  }
  handlePasswordChange=(e)=>{
    const password=e.target.value;
    console.log(this.state)
    this.setState(()=>({
      password
  }))
  }
   handleSubmit=(e)=>{
    e.preventDefault();
    let flaguser=false;
    let flagpass=false;
    this.props.person.map((profile)=>{
      if(profile.name === this.state.userName){
        flaguser=true;

        if(profile.password === this.state.password){
          flagpass=true;
          this.props.dispatch(addMyProfoile(profile));
          this.props.dispatch(validateuser())
          this.setState(()=>({
            error:"valid",
            id:profile.id
          }))
        }
        else this.setState(()=>{
          flagpass=false;
          return {
            error:"Incorrect Password"
          }
        })
      }
    })

     if(flaguser === false){
       this.setState(()=>({
         error:"invalid user"
       }))
     }
   }
   redirectToSignUp=()=>{
    this.props.history.push("/signUp")
   }
  //  <div class="signuplink"><NavLink  style={{ textDecoration: 'none' }} className="links"to="/signUp">Sign Up</NavLink></div>
  render(){
     return (
      <div className= "loginbox">
      <div className="logo">

      <div className="icon">
      <div className ="contact">
        <img src= {intlogo}></img>
        <p> You Can Contact Us On:::</p>
      </div>

      <ul id="menu">
        <li><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></li>
        <li><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></li>
        <li><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></li>
        <li><i className="fa fa-phone fa-lg" aria-hidden="true"></i></li>
        <li><a href= "https://github.com/polonium31/Interest-Studio-.git"><i className="fa fa-github-square fa-lg" aria-hidden="true"></i> </a></li>
        <li><i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i></li>
        <li><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></li>
        </ul>
      </div>
      </div>
      <div className="loginForm">
      <h1>Welcome To InterestStudio ::</h1>
      <div className="loginforminput">
      <form  onSubmit={this.handleSubmit}>
       <div className="textbox">
       <i className="fa fa-user fa-2x" aria-hidden="true"></i>
       <input type="text" placeholder="UserName" value={this.state.userName} onChange={this.handleUserNameChange}/></div>
       <br></br>
       <div className="textbox">
       <i className ="fa fa-lock fa-2x" aria-hidden="true"></i>
        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/></div>
       <br></br>

       <button id='loginbtn'>Login</button>
       </form>
       {!!this.state.error && <div className = "error">
        <h3>{this.state.error}</h3>
       </div>}
       {this.state.error === "valid" && <Redirect to={"/"} />}
      </div>
      <div className="newuser">
         <h2> New User?</h2>
      </div>
      <div>
        <button onClick={()=>{this.redirectToSignUp()}}>Sign Up</button>
      </div>
      </div>


     </div>

        )
   }
 }
 const mapStateToProps=(state)=>{
  return {
   person:state.person,
  }
}
export default connect(mapStateToProps)(LoginPage);

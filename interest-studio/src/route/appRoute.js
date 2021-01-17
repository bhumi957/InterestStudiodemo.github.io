import React from "react";
import {BrowserRouter , Route ,Switch,Redirect} from 'react-router-dom';
import Header from "../components/header";
import ExploreFields from "../components/exploreFields";
import ExploreInterests from "../components/exploreInterest";
import Profile from "../components/Profile";
import EditProfile from "../components/editProfile";
import NotFoundPage from "../components/notFoundPage";
import ViewParticularInterest from "../components/viewProfile";
import LoginPage from "../components/loginPage";
import SignUpPage from "../components/SignUpPage";
import {connect} from "react-redux";



const  AppRoute=(props)=>{
  const isAuthorised=false;
  return (
    <div>
     <BrowserRouter>
      <div>
      {props.authentaction.isvalid && <Header/>}
        <Switch>
         <Route exact path="/" component={ExploreFields}>
          {!props.authentaction.isvalid && <Redirect to="logIn"/>}
         </Route>

         <Route path="/exploreInterests/:field" component={ExploreInterests}/>
         <Route path="/Profile/:id" component={Profile}/>
         <Route path="/editProfile" component={EditProfile}/>    
         <Route path="/viewProfile/:id" component={ViewParticularInterest}/>  
         <Route path="/login" component={LoginPage}/>
         <Route path="/signUp" component={SignUpPage}/>
         <Route component={NotFoundPage}/>
         </Switch>
      </div>
     </BrowserRouter>
    </div>
)
}
const stateToProps=(state)=>{
  return {
    authentaction:state.authentication
  }
}
export default connect(stateToProps)(AppRoute);
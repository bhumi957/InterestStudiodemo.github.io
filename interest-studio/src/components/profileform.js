// import React from "react";
// class ProfileForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:"",
//             university:"",
//             interests:[],
//             projects:"",
//             contact:{
//                 email:"",
//                 phone:""
//             },
//             password:"",
//             cpassword:"",
//             error:""
//         }
        
//     }
//     handleNameChange=(e)=>{
//        const name=e.target.value
//        this.setState(()=>({
//            name
//        }))
//     }
//     handleUniversityChange=(e)=>{
//         const university =e.target.value;
//         this.setState(()=>({
//             university
//         }))
//     }
//     handleProjectChange=(e)=>{
//         const projects=e.target.value
//         this.setState(()=>({
//            projects
//        }))
//     }
//     handleEmailChange=(e)=>{
//         const email=e.target.value;
//         this.setState((state)=>{
//             return {
//                 contact:{...state.contact,email:email}
//             }
//         }
//         )
        

    
//     }
//     handlePhoneChange=(e)=>{
//        const phone=e.target.value;
//        this.setState((state)=>{
//            return {
//                contact:{...state.contact,phone:phone}
//            }
//        })
//     }
//     handlePasswordChange=(e)=>{
//         const password=e.target.value;
//         this.setState(()=>({
//             password
//         })
            
//         )
//     }
//     handleCPasswordChange=(e)=>{
//         const cpassword=e.target.value;
//         this.setState(()=>({
//             cpassword
//         })
            
//         )
//     }
//     onSubmit=(e)=>{
//         let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         e.preventDefault()
//         if(this.state.name === ""){
//             this.setState(()=>{
//                 return {
//                     error:"please enter name"
//                 }
//             })
//         }
//         else if(this.state.university === ""){
//             this.setState(()=>{
//                 return {
//                     error:"please enter university"
//                 }
//             })
//         }
//        else if(this.state.contact.email !== ""){
//         if (! re.test(this.state.contact.email) ) 
//         {
//           this.setState(()=>{
//               return {
//                   error:"please enter valid email"
//               }
//           })
//       }
//        }
//         else if(this.state.password === ""){
//             this.setState(()=>{
//                 return {
//                     error:"please enter password"
//                 }
//             })
//         }
//         else if(this.state.password === this.state.cpassword)
       
//         {
//         this.props.onSubmit({
//             name:this.state.name,
//             university:this.state.university,
//             interests:this.state.interests,
//             contact:this.state.contact.phone,
//             email:this.state.contact.email,
//             project:this.state.projects,
//             password:this.state.password}
//             )
//        }
//        else {
//            this.setState(()=>{
//                return {
//                    error:"password didn't maatch Try again"
//                }
//            })
//        }

//    }

//    render(){

//         return (
//            <div>
//             <form  onSubmit={this.onSubmit} className="profile">
//              <input type="text" className="input_field" id="my_name" placeholder="Username*" value={this.state.name} onChange={this.handleNameChange}/>

//              <input type="text" className="input_field" id="my_university_text" placeholder="University Name*" value={this.state.university} onChange={this.handleUniversityChange}/>
//              <input type="text" className="input_field" id="my_project" placeholder="Your Projects" value={this.state.projects} onChange={this.handleProjectChange}/>

//              <input type="password" className="input_field" placeholder="Password*" value={this.state.password} onChange={this.handlePasswordChange} />
//              <input type="password" className="input_field" placeholder="Confirm Password" value={this.state.cpassword} onChange={this.handleCPasswordChange}/>

//              Contact Details
//             <input type="text" id="my_email" className="input_field" placeholder="E mail" value={this.state.contact.email} onChange={this.handleEmailChange}/>
//             <input type="number" className="input_field" placeholder="Contact Number" id="my_number"  value={this.state.contact.phone} onChange={this.handlePhoneChange}/>

//              <button id="submit_profile">Create Profile</button>


//              </form>
//              <form  action="/signUp">
//              {this.state.error&&<div> <h3>{this.state.error}</h3></div>}
//                   <button id="login" to="/signUp">Login</button>
//               </form>
            
//            </div>
//        )
//    }
// }
// export default ProfileForm;
import React from "react";
import {Link, Redirect} from "react-router-dom";
class ProfileForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            university:"",
            interests:[],
            projects:"",
            contact:{
                email:"",
                phone:""
            },
            password:"",
            cpassword:"",
            error:""
        }
    }
    handleNameChange=(e)=>{
       const name=e.target.value
       this.setState(()=>({
           name
       }))
    }
    handleUniversityChange=(e)=>{
        const university =e.target.value;
        this.setState(()=>({
            university
        }))
    }
    handleProjectChange=(e)=>{
        const projects=e.target.value
        this.setState(()=>({
           projects
       }))
    }
    handleEmailChange=(e)=>{
        const email=e.target.value;
        this.setState((state)=>{
            return {
                contact:{...state.contact,email:email}
            }
        }
        )
        

    
    }
    handlePhoneChange=(e)=>{
       const phone=e.target.value;
       this.setState((state)=>{
           return {
               contact:{...state.contact,phone:phone}
           }
       })
    }
    handlePasswordChange=(e)=>{
        const password=e.target.value;
        this.setState(()=>({
            password
        })
            
        )
    }
    handleCPasswordChange=(e)=>{
        const cpassword=e.target.value;
        this.setState(()=>({
            cpassword
        })
            
        )
    }
    onSubmit=(e)=>{
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        e.preventDefault()
        if(this.state.name === ""){
            this.setState(()=>{
                return {
                    error:"please enter name"
                }
            })
        }
        else if(this.state.university === ""){
            this.setState(()=>{
                return {
                    error:"please enter university"
                }
            })
        }
       else if(this.state.contact.email !== ""){
        if (! re.test(this.state.contact.email) ) 
        {
          this.setState(()=>{
              return {
                  error:"please enter valid email"
              }
          })
      }
       }
        else if(this.state.password === ""){
            this.setState(()=>{
                return {
                    error:"please enter password"
                }
            })
        }
        else if(this.state.password === this.state.cpassword)
       
        {
        this.props.onSubmit({
            name:this.state.name,
            university:this.state.university,
            interests:this.state.interests,
            contact:this.state.contact.phone,
            email:this.state.contact.email,
            project:this.state.projects,
            password:this.state.password}
            )
       }
       else {
           this.setState(()=>{
               return {
                   error:"password didn't maatch Try again"
               }
           })
       }

   }
   

   render(){

        return (
          
           <div className="signup">
               <div className="title"><h1> Enter Your Details:::</h1></div>
            <form  onSubmit={this.onSubmit} className="profile">
            <div className="insideWrapper1">
            <div className="profileinput">
            <i className="fa fa-user" aria-hidden="true"></i>
            <input type="text" className="input_field" id="my_name" placeholder="Username*" value={this.state.name} onChange={this.handleNameChange}/>
            </div>
            <br></br>
            <div className="profileinput">
            <i className="fa fa-university" aria-hidden="true"></i>
             <input type="text" className="input_field" id="my_university_text" placeholder="University Name*" value={this.state.university} onChange={this.handleUniversityChange}/>
            </div>
            <br></br>
            <div className="profileinput">
            <i className="fa fa-book" aria-hidden="true"></i>
            <input type="text" className="input_field" id="my_project" placeholder="Your Projects" value={this.state.projects} onChange={this.handleProjectChange}/>
            </div>
            <br></br>
            <div className="profileinput">
            <i className="fa fa-lock" aria-hidden="true"></i>
            <input type="password" className="input_field" placeholder="Password*" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <br></br>
            <div className="profileinput">
            <i className="fa fa-lock" aria-hidden="true"></i>
            <input type="password" className="input_field" placeholder="Confirm Password*" value={this.state.cpassword} onChange={this.handleCPasswordChange}/>
            </div>
            <br></br>
            </div>
            <div className="insideWrapper1">
            <div className="title2"><h2>Contact Details:::</h2></div>
            <div className="profileinput">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <input type="text" id="my_email" className="input_field" placeholder="E mail" value={this.state.contact.email} onChange={this.handleEmailChange}/>
            </div>
            <br></br>
            <div className="profileinput">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <input type="number" className="input_field" placeholder="Contact Number" id="my_number"  value={this.state.contact.phone} onChange={this.handlePhoneChange}/>
            </div>
            <br></br>
            </div>
            
            
            
            <button id="submit_profile">Create Profile</button>
            
            </form>
            <div  action="/signUp">
            {this.state.error&&<div> <h3>{this.state.error}</h3></div>}
            
            </div>
            </div>
       )
   }
}export default ProfileForm;
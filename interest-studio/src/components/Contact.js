 import React from "react";
import phone from "./phone.png";
import email from "./email.png";
const Contact =(props)=>{
    return (
    <div>
      {!!props.contact&&<p><i class="fa fa-mobile fa-2x" aria-hidden="true"></i>  Phone :  {props.contact} </p>}
      {!!props.email&&<p><i class="fa fa-envelope fa-lg" aria-hidden="true"></i> Email :  {props.email} </p>}
    </div>
)

}
export default Contact;

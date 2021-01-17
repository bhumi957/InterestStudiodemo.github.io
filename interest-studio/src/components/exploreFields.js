import React from "react";
import {NavLink} from "react-router-dom";
import Coding_Image from "./field_icons/coding logo final.jpg";
import Writing_Image from  "./field_icons/copywriting logo final.jpg";
import Music_Image from  "./field_icons/music logo final.jpg";
import Dance_Image from "./field_icons/dance logo final.jpg";
import Electrical_Image from  "./field_icons/hardware elec logo final.jpg";
import Esports_Image from  "./field_icons/gaming logo final.jpg";
import Photography_Image from  "./field_icons/photography logo final.png";
import Games_Image from  "./field_icons/sports logo final.jpg";

const ExploreFields=()=>(
   <div className="field_container">

   <div className="field">
        <NavLink to="/exploreInterests/dance" >
          <img src={Dance_Image} alt="Dance Field" className="field_hover" value="dance" id="image" height="100%" width="100%" />
        </NavLink>
        <div className="content">
           <h3>Dance</h3>
        </div>
     </div>

     <div className="field">
        <NavLink to="/exploreInterests/coading" >
        <img src={Coding_Image} alt="coding_Field" className="field_hover" value="coding" id="image"  height="100%" width="100%"/>
        </NavLink>
        <div className="content">
           <h3>Coding</h3>
        </div>
     </div>

     <div className="field">
        <NavLink to="/exploreInterests/writing" >
        <img src={Writing_Image} className="field_hover" alt="writing_Field" value="writing" id="image"  height="100%" width="100%" />
        </NavLink>
        <div className="content">
        <h3>Writing</h3>
     </div>
     </div>
     <div className="field">
        <NavLink to="/exploreInterests/Music" >
        <img src={Music_Image} alt="Music Field" className="field_hover" value="Music" id="image"  height="100%" width="100%" />
        </NavLink>
        <div className="content">
        <h3>Music</h3>
     </div>
     </div>
     <div className="field">
        <NavLink to="/exploreInterests/electrical" >
        <img src={Electrical_Image} alt="electrical Field" className="field_hover" value="Music" id="image"  height="100%" width="100%" />
        </NavLink>
        <div className="content">
        <h3>Hardware Development</h3>
     </div>
     </div>
     <div className="field">
        <NavLink to="/exploreInterests/esports" >
        <img src={Esports_Image} alt="esports Field" className="field_hover" value="Music" id="image"  height="100%" width="100%" />
        </NavLink>
        <div className="content">
        <h3>Esports</h3>
     </div>
     </div>
     <div className="field">
        <NavLink to="/exploreInterests/photography" >
        <img src={Photography_Image} alt="photography Field" className="field_hover" value="Music" id="image"  height="100%" width="100%" />
        </NavLink>
        <div className="content">
        <h3>Photography</h3>
     </div>
     </div>
     <div className="field">
        <NavLink to="/exploreInterests/games" >
        <img src={Games_Image} alt="Games Field" className="field_hover" value="Music" id="image"  height="100%" width="100%" />
        </NavLink>
        <div className="content">
        <h3>Sports Game</h3>
     </div>
     </div>

   </div>
)

export default ExploreFields;

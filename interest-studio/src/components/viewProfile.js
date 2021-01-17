import React from "react";
import {connect} from "react-redux";
import { setUniversityText } from "./action/filter";
import PeopleList from "./PeopleList";
import myProfile from "./reducers/myProfile";
const  ViewParticularInterest=(props)=>{
 const checkId=Number(props.match.params.id);
 const finalInterest=props.interests.filter((interest)=>interest.id === checkId);
 const university_text=props.filteres.university_text;
 const array=finalInterest[0];
 console.log("here");
 console.log(array);
 const intArray=array.peopleThatFollow.filter((int)=>{
  return int.university.includes(university_text)
})
return (
    <div className="search_interest">
     <p id="interest_name">{finalInterest[0].name}</p>
     <h2>{finalInterest[0].description}</h2>
     <div className="search">
    <input type="text" className = "searchTerm"  placeholder="Find Your University " value={props.filteres.university_text}
      onChange={
        (e)=>{
          return{
            value:props.dispatch(setUniversityText(e.target.value))
          }
        }
      }
     />
     <button type="submit" class="searchButton"><i class="fa fa-search"></i></button>
     </div>
     {
       intArray.map((people)=>{

           return (
                    <PeopleList people={people} key={people.id}/ >
                  )
       }
       )
     }

    </div>
)
}
const mapStateToProps=(state)=>{

  return {
    filteres:state.filters,
   interests:state.interests,
   myProfile:state.myProfile,


  }
}

export default connect(mapStateToProps)(ViewParticularInterest);

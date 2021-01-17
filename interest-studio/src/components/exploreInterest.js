import React from "react";
import {connect} from "react-redux";
import {getVisibleinterests, searchVisibleInterest} from "./selectors/selectors";
import ExportInterestList from "./ExploreInterestList";
import {setInterestText} from "./action/filter";

const ExploreInterests=(props)=>{
   const field=props.match.params.field;
   let interests=getVisibleinterests(props.interests,field);
  const filter_text=props.filters.interest_text;
  const intArray=interests.filter((int)=>{
    return int.name.includes(filter_text)
  })

  return <div className="search_interest">

        <div className="search">

        <input type="text"  className="searchTerm"  placeholder="Search Interest" value={props.filters.interest_text} onChange={(e)=>{
             return {
               value:props.dispatch(setInterestText(e.target.value))

             }
          }}/>
          <button type="submit" class="searchButton"><i class="fa fa-search"></i></button>
        </div>
    {intArray.map((int)=>(
      <div key={int.id}>
      <ExportInterestList key={int.id} interest={int} myProfile={props.myProfile}/>
      </div>
    ))}
   </div>
  }

const mapStateToProps=(state)=>{
  return {
       interests:state.interests,
       myProfile:state.myProfile,
       filters:state.filters
  }
}
export default connect(mapStateToProps)(ExploreInterests);


const defaultFilterState={
    university_text:"",
    interest_text:"",
    field_text:""
}
const filterReducer=(state=defaultFilterState,action)=>{
    switch(action.type){
        case("SORT_BY_UNIVERSITY"):{
           return {...state,university_text:action.text}
        }
        case("SORT_BY_INTEREST"):{
            return {...state,interest_text:action.text}
        }
        case("SORT_BY_FIELD"):{
            return {...state,field_text:action.text}
        }
        default: return state;
    }
   }
   export default filterReducer;
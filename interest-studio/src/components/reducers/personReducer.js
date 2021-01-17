
const defaultPersonState=[];
const personReducer=(state=defaultPersonState,action)=>{
    switch(action.type){
       case("ADD_PERSON"):
         
        return [
          ...state,
          action.person
        ]
      case("REMOVE_PERSON"):
       return state.filter((person)=> person.id!==action.id)
       case("ADD_INTEREST"):{
          return  state.map((person)=>{
               if(person.id===action.personId){
                person.interests=person.interests.concat(action.interest)
               }
               return person;   
           })
        } 
      case("REMOVE_INTEREST"):{
         return state.map((person)=>{
          if(person.id===action.personId){
             person.interests= person.interests.filter((interest)=> interest.id !== action.interestId)
          }
          return person
         })
      }
      
        default:
            return state;
    }
  }
  export default personReducer;
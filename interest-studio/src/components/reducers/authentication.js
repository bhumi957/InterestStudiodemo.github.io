const defaultAuthenticationReducer={
    isvalid:false
}
const authentication=(state=defaultAuthenticationReducer,action)=>{
  switch(action.type){
      case("VALIDATE_USER"):{
         return {
             ...state,
             isvalid:true
         }
      }
      case("INVALIDATE_USER"):{
          return {
              ...state,
              isvalid:false
          }
      }
      default :{
          return state
      }
  }
}
export default authentication;
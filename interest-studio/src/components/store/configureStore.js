import {createStore,combineReducers} from "redux";
import personReducer from "../reducers/personReducer";
import interestReducer from "../reducers/interestReducer";
import filterReducer from "../reducers/filterReducer";
import myProfileReducer from "../reducers/myProfile";
import authentication from "../reducers/authentication";
export default ()=>{
    const store=createStore(
        combineReducers({
            person:personReducer,
            interests:interestReducer,
            filters:filterReducer,
            myProfile:myProfileReducer,
            authentication:authentication
        })
    )
    return store;
}

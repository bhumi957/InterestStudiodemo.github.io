import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import AppRouter from "./route/appRoute";
import reportWebVitals from './reportWebVitals';
import ConfigureStore from "./components/store/configureStore";
import {addperson} from "./components/action/person";
import {addPersonToInterest} from "./components/action/interest";
import { searchVisibleInterest } from './components/selectors/selectors';

const store=ConfigureStore();



const personOne=store.dispatch(addperson({id:"1",name:"jainish",password:"jainish122",university:"Indus University",interests:[{

  field:"writing",
  name:"copywriting",
  description:"For creative people who love to put their thoughts on paper.",
  peopleThatFollow:[]
}],
  project:[],
  contact:"9889986974",
  email:"jp32453245@gmail.com"
}));
const personTwo=store.dispatch(addperson({id:"2",name:"Dhruv",password:"dhruv122",university:"IITGN",interests:[],
  project:[],
  contact:"9978518896",
  email:"dp32453245@gmail.com"
}));
const personThree=store.dispatch(addperson({id:"3",name:"Aryan",password:"aryan122",university:"IIM",interests:[],
  project:[]
}));
const PersonFour=store.dispatch(addperson({id:"4",name:"Mihir",password:"Mihir122",university:"Nirma University",interests:[],
  project:[],
  contact:"987987978",
  email:"mn32453245@gmail.com"
}));
store.dispatch(addPersonToInterest(11,{id:"1",name:"Jainish",university:"indus",interests:[ ],
project:[]
}))
store.dispatch(addPersonToInterest(11,{id:"3",name:"aryan",university:"iim",interests:[ ],
project:[]
}))
store.dispatch(addPersonToInterest(11,{id:"4",name:"mihir",university:"Nirma",interests:[ ],
project:[]
}))
store.dispatch(addPersonToInterest(12,{id:"1",name:"Jainish",university:"indus",interests:[],
project:[]
}))


store.subscribe(()=>{
  console.log(store.getState());
})
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
   <AppRouter/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";


import { configure } from "@testing-library/react";
const interestOne={
    id:1,
    field:"dance",
    name:"bharat Natiyam",
    description:"A dance for People who are mainly interested in classical dance",
    peopleThatFollow:[]
}
//default State



//reducers




//action Generator

 

//visible part
 

store.subscribe(()=>{
    const state=store.getState();
    const interests=getVisibleinterests(state.interests,"dance");
    console.log(interests);
    const visibleInterest=searchVisibleInterest(interests,"bharat")
    console.log(visibleInterest);
    const visibleuniversityPersondetails=visibleUniversityPerson(visibleInterest[0],"indus");
    console.log(visibleuniversityPersondetails); 
    // console.log(visiblePerson)
    
})
//actionCall

const personOne=store.dispatch(addperson({name:"Jainish",university:"indus",interests:[{id:4,
    field:"coading",
    name:"Python",
    description:"A branch for people who is interested in DataScience and ai",
    peopleThatFollow:[]}],
    project:[]
}));
store.dispatch(addperson({name:"Dhruv",university:"iite",interests:[{id:4,
    field:"dancing",
    name:"hip-hop",
    description:"A branch for people who is interested in DataScience and ai",
    peopleThatFollow:[]}],
    project:[],
    contact:{
        email:"32453245@gmail.com",
        phone:9978518896
    }
}));
store.dispatch(addPersonToInterest(1,{id:1,name:"Mihir",university:"nirma",interests:[{id:7,
    field:"writing",
    name:"contentWriting",
    description:"",
    peopleThatFollow:[]}],
    project:[]
}))
store.dispatch(addPersonToInterest(1,{name:"Jainish",university:"indus",interests:[{id:4,
    field:"coading",
    name:"Python",
    description:"A branch for people who is interested in DataScience and ai",
    peopleThatFollow:[]}],
    project:[]
}))
store.dispatch(addPersonToInterest(1,{name:"Dhruv",university:"uuit",interests:[{id:9,
    field:"skyDiving",
    name:"mountainJumping",
    description:"",
    peopleThatFollow:[]}],
    project:[]
}))
store.dispatch(addPersonToInterest(1,{name:"aryan",university:"iite",interests:[{id:10,
    field:"listening",
    name:"deppListening",
    description:"",
    peopleThatFollow:[]}],
    project:[]
}))





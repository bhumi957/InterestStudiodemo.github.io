export const addPersonToInterest=(interestId,{
    id,
    name,
    university,
    interests,
    contact,
    project})=>({
        type:"ADD_PERSON_TO_INTEREST",
        person:{
            id,
            name,
            university,
            interests,
            contact,
            project
        },
        interestId
    })
export const removePersonFromInterest=(personId,interestId)=>({
    type:"REMOVE_PERSON_FROM_INTEREST",
    personId,
    interestId
}) 
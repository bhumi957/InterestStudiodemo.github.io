export const getVisibleinterests=(interests,text)=>{
    return interests.filter((interest)=> typeof text !== "string" || interest.field === text)
}
export const  searchVisibleInterest=(interests,text)=>{
    return interests.filter((interest)=> typeof text !== "string" || interest.name.includes(text))
}
export const visibleUniversityPerson=(visiblePerson,text)=>{
    return visiblePerson.peopleThatFollow.filter((person)=> person.university.includes(text))
}
export const visibleSingleInterest=(interests,id)=>{
    return interests.filter((interest)=> interest.id === id)
}

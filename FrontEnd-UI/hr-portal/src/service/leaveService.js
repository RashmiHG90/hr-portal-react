import axios from "axios"

let leaveURL = "http://localhost:3000/leaveInformation"

export const viewLeaveDetails = async()=>{

    try{
        const result = await axios.get(leaveURL)
        console.log(result.data);
        return result.data;
    }catch(error){
        console.log(error.message)
    }
}

export const createLeave = async(newleave)=>{
    //post
    //url and data(user)
    try{
        const result = await axios.post(leaveURL, newleave)
        console.log(result.data);
        return result.data;
    }catch(error){
        console.log(error.message)
    }
}

export const updateLeaveStatus = async(leaveId, leaveInformation)=>{
    //post
    //url and data(user)
    try{
        const result = await axios.put(`${leaveURL}/${leaveId}`,leaveInformation)
        console.log(result.data);
        return result.data;
    }catch(error){
        console.log(error.message)
    }
}


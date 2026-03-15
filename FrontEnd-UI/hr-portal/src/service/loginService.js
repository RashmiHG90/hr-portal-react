import axios from "axios"

let URL = "http://localhost:3000/logins"
let empURL = "http://localhost:3000/employees"

export let isAuthenticated =()=>{
    return localStorage.getItem("employeeEmail") !== null
}

export const hrsignIn = async()=>{

    try{
        const result = await axios.get(URL)
        console.log(result.data);
        return result.data;
    }catch(error){
        console.log(error.message)
    }
}

export const employeesignIn = async()=>{

    try{
        const result = await axios.get(empURL)
        console.log(result.data);
        return result.data;
    }catch(error){
        console.log(error.message)
    }
}


export const signUp = async(newUser)=>{
    //post
    //url and data(user)
    try{
        const result = await axios.post(empURL, newUser)
        console.log(result.data);
        return result.data;
    }catch(error){
        console.log(error.message)
    }
}

export const updateEmployee = async(empId,empDetails)=>{
    try{
        const result = await axios.put(empURL+"/"+empId, empDetails)
        console.log(result.data);
        return result.data;
    }catch(error){
        console.log(error.message)
    }
}
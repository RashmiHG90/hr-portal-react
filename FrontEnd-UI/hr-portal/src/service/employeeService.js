import axios from "axios"

let empURL = "http://localhost:3000/employees"

export const viewEmployees = async()=>{

    try{
        const result = await axios.get(empURL)
        console.log(result.data);
        return result.data;
    }catch(error){
        console.log(error.message)
    }
}

// export const createEmployee = async(newUser)=>{
//     //post
//     //url and data(user)
//     try{
//         const result = await axios.post(empURL, newUser)
//         console.log(result.data);
//         return result.data;
//     }catch(error){
//         console.log(error.message)
//     }
// }


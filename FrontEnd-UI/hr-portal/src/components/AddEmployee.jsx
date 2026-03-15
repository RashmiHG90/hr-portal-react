import { useState } from "react"
import { employeesignIn, hrsignIn,signUp } from "../service/loginService"



function AddEmployee(){
    let [firstName, setfirstName]= useState("")
    let [lastName, setlastName]= useState("")
    let [email, setEmail] = useState("")

    
    let checkUserExists = async()=>{
        const empData = await employeesignIn();
        return empData.some(user => user.email===email);  
    }

    let handleSubmit= async (e)=>{
        e.preventDefault();
        const userPresent = await checkUserExists();
        console.log("Inside handle submit method")
        console.log(userPresent)
        if(userPresent){
            alert("User already exists")
        }else{
            let newUser ={
                firstName,
                lastName,
                age:"",
                email,
                password:"",
                role: "Employee"
            }
            let result1 = await signUp(newUser);
            if(result1){
                alert("Employee added successfully");
                setEmail("")
                setfirstName("")
                setlastName("")                
            }else{
                alert("Failed to create employee");
            }
        }
    }

    
    return(
        <>
        <h3>Add Employee</h3>
        <form onSubmit={handleSubmit}>
            <label>Firstname : </label>
            <input type="text" name="firstName" 
            value ={firstName} onChange={(e)=>setfirstName(e.target.value)}/><br/>
            <label>Lastname : </label>
            <input type="text" name="lastName" 
            value ={lastName} onChange={(e)=>setlastName(e.target.value)}/><br/>
            <label>Email : </label>
            <input type="email" name="email" placeholder="Enter email id"
            value ={email} onChange={(e)=> setEmail(e.target.value)} /> <br />      
            <button type="submit">Add Employee</button>
        </form>
       
        </>
    )
}


export default AddEmployee
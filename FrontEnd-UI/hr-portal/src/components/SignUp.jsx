import { useState } from "react"
import { employeesignIn, hrsignIn,signUp } from "../service/loginService"
import { useNavigate, Link } from "react-router-dom"


function SignUp(){
    let [firstName, setfirstName]= useState("")
    let [lastName, setlastName]= useState("")
    let [age, setAge]= useState("")
    let [email, setEmail] = useState("")
    let [password,setPassword]= useState("")

    
    let navigate=useNavigate();
    
    let checkUserExists = async()=>{
        //check HR first
        const hrData = await hrsignIn();
        if(hrData.some(user => user.email === email)) return true;

        const empData = await employeesignIn();
        return empData.some(user => user.email===email);
        // let userFound = result.find((user)=> user.email === email)      

    }

    let handleSubmit= async (e)=>{
        e.preventDefault();
        const userPresent = checkUserExists();
        if(userPresent){
            alert("User already exists")
        }else{
            let newUser ={
                firstName,
                lastName,
                age,
                email,
                password,
                role: "Employee"
            }
            let result1 = await signUp(newUser);
            if(result1){
                alert("Sign Up successful");
                navigate("/");
            }else{
                alert("Sign up failed");
            }
        }
    }

    // here we are calling services twice once for storing login details in login db and other in employee details in employee db.
    //let handleSubmit= async (e)=>{
    //     e.preventDefault();
    //     let result = await signIn();
    //     let userFound = result.find((user)=> user.email === email)
    //     if(userFound){
    //         alert("User already exists")
    //     }else{
    //         let newLogin={
    //             email,
    //             password,
    //             role: "Employee"
    //         }
    //         let result1 = await signUp(newLogin); // storing in logins json file
    //         if(result1){
    //             let newEmployee ={
    //             fName,
    //             lName,
    //             age,
    //             email
    //         }
    //         await createEmployees(newEmployee);
    //             alert("Sign Up successful");
    //             navigate("/");
    //         }else{
    //             alert("Sign up failed");
    //         }
    //     }
    // }
    
    return(
        <>
        <h3>Sign Up Page</h3>
        <form onSubmit={handleSubmit}>
            <label>Firstname : </label>
            <input type="text" name="firstName" 
            value ={firstName} onChange={(e)=>setfirstName(e.target.value)}/><br/>
            <label>Lastname : </label>
            <input type="text" name="lastName" 
            value ={lastName} onChange={(e)=>setlastName(e.target.value)}/><br/>
            <label>Age : </label>
            <input type="number" name="age" 
            value ={age} onChange={(e)=>setAge(e.target.value)}/><br/>
            <label>Email : </label>
            <input type="email" name="email" placeholder="Enter email id"
            value ={email} onChange={(e)=> setEmail(e.target.value)} /> <br />
            <label>Password : </label>
            <input type="password" name="password" placeholder="Enter password"
            value = {password} onChange={(e)=>setPassword(e.target.value)} /> <br />
          
            <button type="submit">Sign Up</button>
        </form>
        <Link to='/'> Already have an account? Login </Link>
        </>
    )
}


export default SignUp
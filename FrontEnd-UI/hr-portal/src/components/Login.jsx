import { useState } from "react"
import { hrsignIn,employeesignIn } from "../service/loginService"
import { useNavigate, Link } from "react-router-dom"

function Login(){

    let [email, setEmail] = useState("")
    let [password,setPassword]= useState("")
    let [role, setRole] = useState("")
    let navigate=useNavigate();

    let handleSubmit= async (e)=>{
        e.preventDefault();
        if(role === "hr"){
             let result = await hrsignIn();
             let user = result.find((user)=> user.email === email && user.password === password && user.role === role);
             if(user){
                // alert("Login successful")
                sessionStorage.setItem("user", user);
                localStorage.setItem("employeeEmail", email)
                navigate("/hr-dashboard")
             }
        }else if (role === "Employee"){
            let result = await employeesignIn();
             let user = result.find((user)=> user.email === email && user.password === password && user.role === role);
             if(user){
                // alert("Login successful")
                sessionStorage.setItem("user", user);
                localStorage.setItem("employeeEmail", email)
                navigate("/employee-dashboard")                
             }            
        }else{
        alert("Invalid credential")
       }
        
       
    //    console.log(user)
    //    sessionStorage.setItem("user", user);
    //    if(user && role === "hr"){
    //    // alert("Login successful")
    //    navigate("/hr-dashboard")
    //    }else if(user && role === "Employee"){
    //     localStorage.setItem("employeeEmail", email)
    //       navigate("/employee-dashboard")
    //    }else{
    //     alert("Invalid credential")
    //    }

    }
    
    return(
        <>
        <h3>Login Page</h3>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter email id"
            value ={email} onChange={(e)=> setEmail(e.target.value)} /> <br />
            <input type="password" name="password" placeholder="Enter password"
            value = {password} onChange={(e)=>setPassword(e.target.value)} /> <br />
            <label> Select Role</label>
            <select value={role} onChange={(e)=>setRole(e.target.value)}>
                <option value="">--Select role--</option>
                <option value="hr">HR</option>
                <option value="Employee">Employee</option>
            </select><br />
            <button type="submit">Login</button>
        </form>
        <Link to='/signUp'> Don't have an account? Sign Up </Link>
        </>
    )
}

export default Login
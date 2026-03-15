import { useState,useContext, useEffect } from "react"
import { employeesignIn, hrsignIn,updateEmployee } from "../service/loginService"
import { useNavigate, Link } from "react-router-dom"
import EmployeeContext from "./EmployeeContext"


function SignUp(){

    let [emp, setEmp] = useState({id: "",firstName:"", lastName:"",age:"",email:"",password:"",role:""})  
    let navigate=useNavigate();
    let contextRef = useContext(EmployeeContext);

    useEffect(()=>{
        if(contextRef.employee){
            setEmp({
                id: contextRef.employee.id || "",
                firstName: contextRef.employee.firstName || "",
                lastName: contextRef.employee.lastName || "",
                age: contextRef.employee.age || "",
                email: contextRef.employee.email || "",
                password: contextRef.employee.password || "",
                role: contextRef.employee.role || ""
            })
        }
    },[])

    let handleInputData = (event)=>{
        let {name, value} = event.target;
        setEmp(prev => ({...prev, [name]:value}));
    }
    

    let handleSubmit= async (e)=>{
        e.preventDefault();
             let empId = contextRef.employee.id
            console.log(empId)
            let result1 = await updateEmployee(empId,emp);
            if(result1){
                alert("Sign Up successful");
                navigate("/");
            }else{
                alert("Sign up failed");
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
            value ={emp.firstName} onChange={handleInputData}/><br/>
            <label>Lastname : </label>
            <input type="text" name="lastName" 
            value ={emp.lastName} onChange={handleInputData}/><br/>
            <label>Age : </label>
            <input type="number" name="age" 
            value ={emp.age} onChange={handleInputData}/><br/>
            <label>Email : </label>
            <input type="email" name="email" placeholder="Enter email id"
            value ={emp.email} onChange={handleInputData} /> <br />
            <label>Password : </label>
            <input type="password" name="password" placeholder="Enter password"
            value = {emp.password} onChange={handleInputData} /> <br />
          
            <button type="submit">Sign Up</button>
        </form>
        <Link to='/'> Already have an account? Login </Link>
        </>
    )
}


export default SignUp
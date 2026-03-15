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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 p-4">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl mb-4">
                        <span className="text-2xl font-bold text-white">HR</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Complete Profile</h1>
                    <p className="text-slate-600">Fill in your details to get started</p>
                </div>

                {/* Form Card */}
                <div className="card">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* First Name */}
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input 
                                id="firstName"
                                type="text" 
                                name="firstName"
                                className="form-input"
                                placeholder="John"
                                value={emp.firstName} 
                                onChange={handleInputData}
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input 
                                id="lastName"
                                type="text" 
                                name="lastName"
                                className="form-input"
                                placeholder="Doe"
                                value={emp.lastName} 
                                onChange={handleInputData}
                                required
                            />
                        </div>

                        {/* Age */}
                        <div className="form-group">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input 
                                id="age"
                                type="number" 
                                name="age"
                                className="form-input"
                                placeholder="30"
                                value={emp.age} 
                                onChange={handleInputData}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input 
                                id="email"
                                type="email" 
                                name="email"
                                className="form-input"
                                placeholder="john@company.com"
                                value={emp.email} 
                                onChange={handleInputData}
                                disabled
                            />
                            <p className="text-xs text-slate-500 mt-1">Cannot be changed</p>
                        </div>

                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                id="password"
                                type="password" 
                                name="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={emp.password} 
                                onChange={handleInputData}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-primary w-full mt-6">
                            Complete Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-slate-600">or</span>
                        </div>
                    </div>

                    {/* Login Link */}
                    <p className="text-center text-slate-600">
                        Already have an account?{' '}
                        <Link to="/" className="font-semibold text-primary-600 hover:text-primary-700">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default SignUp
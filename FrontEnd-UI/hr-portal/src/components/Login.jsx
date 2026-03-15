import { useState,useContext } from "react"
import { hrsignIn,employeesignIn } from "../service/loginService"
import { useNavigate, Link } from "react-router-dom"
import EmployeeContext from "./EmployeeContext"

function Login(){

    let [email, setEmail] = useState("")
    let [password,setPassword]= useState("")
    let [role, setRole] = useState("")
    let contextRef = useContext(EmployeeContext)
    let navigate=useNavigate();

    let handleSubmit= async (e)=>{
        e.preventDefault();
        if(role === "hr"){
             let result = await hrsignIn();
             let user = result.find((user)=> user.email === email && user.password === password && user.role === role);
             console.log(user)
             if(user){
                // alert("Login successful")
                localStorage.setItem("employeeEmail", email)
                navigate("/hr-dashboard")
             }
        }else if (role === "Employee"){
            let result = await employeesignIn();
             let user = result.find((user)=> user.email === email && user.role === role);
             if(user){
                contextRef.setEmployee(user);
             }
             if(user.password === ""){
                alert("First time login, please fill in more details")
                localStorage.setItem("employeeEmail", email)
                navigate("/signUp")                
             }else if(user.password === password){
                // alert("Login successful")
                //sessionStorage.setItem("user", user);
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 p-4">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">HR Portal</h2>
                    <p className="text-slate-600">Sign in to your account</p>
                </div>

                {/* Login Card */}
                <div className="card">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input 
                                id="email"
                                type="email" 
                                name="email" 
                                placeholder="you@example.com"
                                className="form-input"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                id="password"
                                type="password" 
                                name="password" 
                                placeholder="••••••••"
                                className="form-input"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Role Selector */}
                        <div className="form-group">
                            <label htmlFor="role" className="form-label">Select Role</label>
                            <select 
                                id="role"
                                value={role} 
                                onChange={(e) => setRole(e.target.value)}
                                className="form-select"
                                required
                            >
                                <option value="">-- Choose your role --</option>
                                <option value="hr">HR Manager</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-primary w-full mt-6">
                            Sign In
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

                    {/* Sign Up Link */}
                    <p className="text-center text-slate-600">
                        Don't have an account?{' '}
                        <Link to="/signUp" className="font-semibold text-primary-600 hover:text-primary-700">
                            Create one
                        </Link>
                    </p>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-slate-500 mt-6">
                    © 2024 HR Portal. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Login
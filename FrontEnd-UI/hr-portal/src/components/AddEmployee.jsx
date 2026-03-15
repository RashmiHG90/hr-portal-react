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
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50 p-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Add New Employee</h1>
                    <p className="text-slate-600">Create a new employee record in the system</p>
                </div>

                {/* Form Card */}
                <div className="card">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* First Name */}
                            <div className="form-group">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input 
                                    id="firstName"
                                    type="text" 
                                    name="firstName"
                                    className="form-input"
                                    placeholder="John"
                                    value={firstName} 
                                    onChange={(e) => setfirstName(e.target.value)}
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
                                    value={lastName} 
                                    onChange={(e) => setlastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input 
                                id="email"
                                type="email" 
                                name="email"
                                className="form-input"
                                placeholder="john.doe@company.com"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="card-footer">
                            <button 
                                type="reset"
                                className="btn-secondary"
                            >
                                Clear
                            </button>
                            <button 
                                type="submit"
                                className="btn-primary"
                            >
                                Add Employee
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddEmployee
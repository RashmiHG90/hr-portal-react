import {useState, useEffect} from "react"
import { viewEmployees } from "../service/employeeService"


function ViewEmpProfile(){

    let [employee, setEmployee] = useState({})
       let employeeEmail = localStorage.getItem("employeeEmail");

    let viewProfileDetails = async() =>{
        try{
            const result = await viewEmployees();
            const searchEmployee = result.find((emp)=> emp.email=== employeeEmail);
            console.log(searchEmployee)
            setEmployee(searchEmployee);
        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(()=>{
        viewProfileDetails();

    },[])

    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50 p-6">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">My Profile</h1>
                    <p className="text-slate-600">Your personal information</p>
                </div>

                {/* Profile Card */}
                <div className="card">
                    {employee && employee.firstName ? (
                        <div className="space-y-6">
                            {/* Profile Header */}
                            <div className="flex items-center gap-6 pb-6 border-b border-slate-200">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white">{employee.firstName?.charAt(0)}{employee.lastName?.charAt(0)}</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">{employee.firstName} {employee.lastName}</h2>
                                    <p className="text-primary-600 font-medium">{employee.email}</p>
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* First Name */}
                                <div>
                                    <label className="form-label">First Name</label>
                                    <p className="text-lg font-medium text-slate-900">{employee.firstName}</p>
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="form-label">Last Name</label>
                                    <p className="text-lg font-medium text-slate-900">{employee.lastName}</p>
                                </div>

                                {/* Age */}
                                <div>
                                    <label className="form-label">Age</label>
                                    <p className="text-lg font-medium text-slate-900">{employee.age || '-'}</p>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="form-label">Email Address</label>
                                    <p className="text-lg font-medium text-primary-600">{employee.email}</p>
                                </div>
                            </div>

                            {/* Status Badge */}
                            <div className="flex gap-2 pt-4">
                                <span className="badge badge-success">Active Employee</span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-slate-500 text-lg">Loading profile information...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default ViewEmpProfile
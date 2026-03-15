import {useState, useEffect} from "react"
import { viewEmployees } from "../service/employeeService"


function ViewEmployees(){

    let [employees, setEmployees] = useState([])

    let loadEmployees = async() =>{
        try{
            const result = await viewEmployees();
            setEmployees(result)
        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(()=>{
        loadEmployees();

    },[])

    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Employees Directory</h1>
                    <p className="text-slate-600">Manage and view all employee information</p>
                </div>

                {/* Table Card */}
                <div className="card">
                    {employees.length > 0 ? (
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee)=>(
                                        <tr key={employee.id}>
                                            <td className="font-medium text-slate-900">#{employee.id}</td>
                                            <td className="font-medium text-slate-900">{employee.firstName}</td>
                                            <td className="font-medium text-slate-900">{employee.lastName}</td>
                                            <td>{employee.age || '-'}</td>
                                            <td className="text-primary-600">{employee.email}</td>
                                            <td>
                                                <span className="badge badge-success">Active</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-slate-500 text-lg">No employees found</p>
                        </div>
                    )}
                </div>

                {/* Summary */}
                <div className="mt-6 text-right text-slate-600">
                    <p>Total Employees: <span className="font-bold text-slate-900">{employees.length}</span></p>
                </div>
            </div>
        </div>
    )

}

export default ViewEmployees
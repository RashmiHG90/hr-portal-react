import {useState, useEffect} from "react"
import { viewLeaveDetails } from "../service/leaveService"


function LeaveStatus(){

    let [leaves, setLeaves] = useState([]);
    let employeeEmail = localStorage.getItem("employeeEmail");

    let loadLeaves = async() =>{
        try{
            const result = await viewLeaveDetails();
            setLeaves(result.filter(leave => leave.employeeEmail === employeeEmail));
        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(()=>{
        loadLeaves();

    },[])


    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Leave History</h1>
                    <p className="text-slate-600">View all your leave requests and their status</p>
                </div>

                {/* Leaves Table Card */}
                <div className="card">
                    {leaves.length > 0 ? (
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Days</th>
                                        <th>Reason</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaves.map((leave)=>(
                                        <tr key={leave.id}>
                                            <td className="font-medium text-slate-900">#{leave.id}</td>
                                            <td className="font-semibold">{leave.numberOfLeaves} days</td>
                                            <td className="text-slate-700">{leave.reasonForLeave}</td>
                                            <td>
                                                <span className={`badge ${
                                                    leave.status === 'approved' ? 'badge-success' :
                                                    leave.status === 'rejected' ? 'badge-danger' :
                                                    'badge-warning'
                                                }`}>
                                                    {leave.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-slate-500 text-lg">No leave requests found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default LeaveStatus
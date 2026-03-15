import {useState, useEffect} from "react"
import { viewLeaveDetails,updateLeaveStatus } from "../service/leaveService"


function ViewLeaves(){

    let [leaves, setLeaves] = useState([]);
    let [msg , setMsg] = useState("")

    let loadLeaves = async() =>{
        try{
            const result = await viewLeaveDetails();
            setLeaves(result.filter(leave => leave.status === "pending"));
        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(()=>{
        loadLeaves();

    },[msg])

    let changeLeaveStatus = async(leaveId, leaveInfo) =>{
        try{
        //    console.log(`Leave Id: ${leaveId} `)
        //    console.log(leaveInfo)
        await updateLeaveStatus(leaveId, leaveInfo)
        setMsg("Leave status updated successfully")
        setTimeout(() => setMsg(""), 3000)
        }catch(error){
            console.log(error.message)
            setMsg("Error updating leave status")
        }

    }

    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Leave Requests</h1>
                    <p className="text-slate-600">Review and manage pending leave applications</p>
                </div>

                {/* Status Message */}
                {msg && (
                    <div className="alert alert-success mb-6">
                        {msg}
                    </div>
                )}

                {/* Leaves Table Card */}
                <div className="card">
                    { leaves.length > 0 ? (
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Employee Email</th>
                                        <th>Days</th>
                                        <th>Reason</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaves.map((leave)=>(
                                        <tr key={leave.id}>
                                            <td className="font-medium text-slate-900">#{leave.id}</td>
                                            <td className="text-primary-600">{leave.employeeEmail}</td>
                                            <td className="font-semibold">{leave.numberOfLeaves} days</td>
                                            <td className="text-slate-700">{leave.reasonForLeave}</td>
                                            <td>
                                                <div className="flex gap-2">
                                                    <button 
                                                        onClick={()=>{changeLeaveStatus(leave.id, {...leave, status:'approved'})}}
                                                        className="btn-success text-sm py-1 px-3"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button 
                                                        onClick={()=>{changeLeaveStatus(leave.id, {...leave, status:'rejected'})}}
                                                        className="btn-danger text-sm py-1 px-3"
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) :(
                        <div className="text-center py-12">
                            <p className="text-slate-500 text-lg">No pending leave requests</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default ViewLeaves
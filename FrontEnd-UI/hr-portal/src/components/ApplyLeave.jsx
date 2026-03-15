import { createLeave } from "../service/leaveService";
import {useState} from "react"


function ApplyLeave(){

    let [numberOfLeaves, setnumberOfLeaves] = useState("");
    let [reasonForLeave, setReasonForLeave] = useState("");
    let [status, setStatus] = useState("pending");
    let [msg, setMsg] = useState("");

    let employeeEmail = localStorage.getItem("employeeEmail");

    let applyLeaveInfo = async(e)=>{
        e.preventDefault();
        try{
            let leaveInfo ={
                employeeEmail,
                numberOfLeaves,
                reasonForLeave,
                status
            }
            await createLeave(leaveInfo);
            setMsg("Leave applied successfully")
            setnumberOfLeaves("");
            setReasonForLeave("");
        }catch(error){
            console.log(error.message)
            setMsg("Failed to apply leave")
        }
    }

    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50 p-6">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Apply for Leave</h1>
                    <p className="text-slate-600">Submit your leave request to HR</p>
                </div>

                {/* Status Message */}
                {msg && (
                    <div className={`alert mb-6 ${msg.includes('successfully') ? 'alert-success' : 'alert-error'}`}>
                        {msg}
                    </div>
                )}

                {/* Form Card */}
                <div className="card">
                    <form onSubmit={applyLeaveInfo} className="space-y-6">
                        {/* Number of Leaves */}
                        <div className="form-group">
                            <label htmlFor="leaves" className="form-label">Number of Leaves</label>
                            <input 
                                id="leaves"
                                type="number" 
                                placeholder="Enter number of days" 
                                className="form-input"
                                value={numberOfLeaves} 
                                onChange={(e)=> setnumberOfLeaves(e.target.value)} 
                                min="1"
                                required
                            />
                        </div>

                        {/* Reason for Leave */}
                        <div className="form-group">
                            <label htmlFor="reason" className="form-label">Reason for Leave</label>
                            <textarea 
                                id="reason"
                                placeholder="Please provide a reason for your leave request..."
                                className="form-input"
                                value={reasonForLeave} 
                                onChange={(e)=> setReasonForLeave(e.target.value)} 
                                rows="4"
                                required
                            />
                        </div>

                        {/* Status Info */}
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                            <p className="text-sm text-primary-800">
                                <strong>Status:</strong> Your request will be reviewed by HR and you will be notified.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-primary w-full">
                            Submit Leave Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplyLeave
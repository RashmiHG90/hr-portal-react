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
        <div>
            <h3>Apply Leave</h3>
            {msg && <span style={{color:"green"}}>{msg}</span>}
            <form onSubmit={applyLeaveInfo}>
            <label>Number of Leaves : </label>
            <input type="number" placeholder="number of leaves" 
            value={numberOfLeaves} onChange={(e)=> setnumberOfLeaves(e.target.value)} required/><br/>
            <label>Reason for Leave : </label>
            <input type="text" placeholder="reason for leave" 
            value={reasonForLeave} onChange={(e)=> setReasonForLeave(e.target.value)} required/><br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ApplyLeave
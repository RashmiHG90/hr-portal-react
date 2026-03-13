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
        let result = await updateLeaveStatus(leaveId, leaveInfo)
        setMsg(result)
        }catch(error){
            console.log(error.message)
        }

    }

    return(
        <>
        <h3>Leave Requests</h3>  
        { leaves.length > 0 ? (
        <table border = {1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Number of leaves</th>
                    <th>Reason for leave</th>
                    <th>Approved</th>
                    <th>Rejected</th>
                </tr>
            </thead>
            <tbody>
                {leaves.map((leave)=>(
                    <tr key={leave.id}>
                        <td>{leave.id}</td>
                        <td>{leave.employeeEmail}</td>
                        <td>{leave.numberOfLeaves}</td>
                        <td>{leave.reasonForLeave}</td>
                        <td><input type ="radio" name={`status-${leave.id}`} onClick ={()=>{changeLeaveStatus(leave.id, {...leave, status:'approved'})}}/></td>
                        <td><input type ="radio" name={`status-${leave.id}`} onClick ={()=>{changeLeaveStatus(leave.id, {...leave, status:'rejected'})}}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
        ) :(
            <p>No Leave request pending</p>
        )
        }
       
        </>
    )

}

export default ViewLeaves
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
        <>
        <h3>Leave Requests</h3>  
        <table border = {1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Number of leaves</th>
                    <th>Reason for leave</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {leaves.map((leave)=>(
                    <tr key={leave.id}>
                        <td>{leave.id}</td>
                        <td>{leave.employeeEmail}</td>
                        <td>{leave.numberOfLeaves}</td>
                        <td>{leave.reasonForLeave}</td>
                        <td>{leave.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>       
        </>
    )

}

export default LeaveStatus
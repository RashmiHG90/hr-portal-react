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
        <>
        <h3>Employees List</h3>
        <p>First Name : {employee.firstName}</p>
        <p>Last Name : {employee.lastName}</p>
        <p>Age : {employee.age}</p>
        <p>Email : {employee.email}</p>
        </>
    )

}

export default ViewEmpProfile
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
        <>
        <h3>Employees List</h3>
        <table border = {1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee)=>(
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.age}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )

}

export default ViewEmployees
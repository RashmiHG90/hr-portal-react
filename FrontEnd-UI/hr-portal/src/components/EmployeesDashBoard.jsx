import { useNavigate,Link,Outlet } from "react-router-dom"

function EmployeesDashBoard(){

    let navigate = useNavigate();
    let employeeEmail = localStorage.getItem("employeeEmail");

    return(
        <>
        <input type="button" value="Logout"
        onClick={()=>{
            sessionStorage.removeItem("user")
            localStorage.removeItem("employeeEmail")
            navigate("/")
        }} />
        <h3>Employees Dashboard</h3>
        <p>Welcome, {employeeEmail.includes("@") ? employeeEmail.split("@")[0]:employeeEmail}</p>

        <Link to ="viewEmpProfile"> View Profile </Link>|
        <Link to ="applyLeave"> Apply Leave</Link>|
        <Link to ="viewLeaveStatus"> Leave Status</Link>
        <div>
            <Outlet/> 
        </div>
        </>
    )
}

export default EmployeesDashBoard
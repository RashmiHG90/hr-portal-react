import { useNavigate, Link , Outlet } from "react-router-dom"

function HrDashboard(){

    let navigate=useNavigate();

    return(
        <>
        <input type="button" value="logout" onClick={()=>
            {sessionStorage.removeItem("user")
            navigate("/")}} />
        <h3>Welcome to HR Dashboard</h3>

        <Link to ="viewEmployees">View Employees | </Link>
        <Link to ="viewLeaves">Leave Requests</Link>
        <div>
            <Outlet/>    {/* outlet is placeholder for nested routes */}
        </div>
        </>
    )
}

export default HrDashboard
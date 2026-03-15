import { useNavigate,Link,Outlet } from "react-router-dom"

function EmployeesDashBoard(){

    let navigate = useNavigate();
    let employeeEmail = localStorage.getItem("employeeEmail");

    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
            {/* Navigation Header */}
            <nav className="bg-white shadow-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo & Title */}
                        <div className="flex items-center gap-3">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Employee Portal</h2>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <button 
                            onClick={()=>{
                                localStorage.removeItem("employeeEmail")
                                navigate("/")
                            }}
                            className="btn-secondary"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto p-6">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h3 className="text-4xl font-bold text-slate-900 mb-2">Welcome, {employeeEmail.split("@")[0]}</h3>
                    <p className="text-slate-600 text-lg">Manage your profile and leave requests</p>
                </div>

                {/* Navigation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* View Profile Card */}
                    <Link to="viewEmpProfile" className="card hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">👤</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">View Profile</h3>
                                <p className="text-sm text-slate-600">Your personal details</p>
                            </div>
                        </div>
                    </Link>

                    {/* Apply Leave Card */}
                    <Link to="applyLeave" className="card hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center opacity-20">
                                <span className="text-2xl">📝</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Apply Leave</h3>
                                <p className="text-sm text-slate-600">Request time off</p>
                            </div>
                        </div>
                    </Link>

                    {/* Leave Status Card */}
                    <Link to="viewLeaveStatus" className="card hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                                <span className="text-2xl">✓</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Leave Status</h3>
                                <p className="text-sm text-slate-600">Check your requests</p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Outlet for nested routes */}
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default EmployeesDashBoard
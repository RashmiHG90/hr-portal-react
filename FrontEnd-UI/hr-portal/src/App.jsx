import './App.css'
import { Route,Routes } from 'react-router-dom'
import {useState} from 'react'
import EmployeeContext from './components/EmployeeContext'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HrDashboard from './components/HrDashboard'
import EmployeesDashBoard from './components/EmployeesDashBoard'
import ProtectedRouter from './components/ProtectedRouter'  
import ViewEmployees from './components/ViewEmployees'
import ViewEmpProfile from './components/ViewEmpProfile'
import ApplyLeave from './components/ApplyLeave'
import ViewLeaves from './components/ViewLeaves'
import LeaveStatus from './components/LeaveStatus'
import AddEmployee from './components/AddEmployee'

function App() {

  let [employee, setEmployee] = useState({});

  return (
    <>
    <EmployeeContext.Provider value={{employee, setEmployee}}>
     <h2>HR Portal Application</h2>

     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/hr-dashboard' element={
       <ProtectedRouter>
        <HrDashboard/>
      </ProtectedRouter>
        }>
          <Route path = 'addEmployee' element={<AddEmployee/>}> </Route>
          <Route path = 'viewEmployees' element={<ViewEmployees/>}> </Route>
          <Route path = 'viewLeaves' element={<ViewLeaves/>}> </Route>
        </Route>
      <Route path='/employee-dashboard' element={
        <ProtectedRouter>
        <EmployeesDashBoard/>
        </ProtectedRouter>
      }>
        <Route path = 'viewEmpProfile' element={<ViewEmpProfile/>}></Route>
        <Route path = 'applyLeave' element ={<ApplyLeave/>}></Route>
        <Route path = 'viewLeaveStatus' element ={<LeaveStatus/>}></Route>
      </Route>
     </Routes>
     </EmployeeContext.Provider>
    </>
  )
}

export default App

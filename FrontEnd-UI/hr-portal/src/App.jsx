import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HrDashboard from './components/HrDashboard'
import EmployeesDashBoard from './components/EmployeesDashBoard'
import ProtectedRouter from './components/ProtectedRouter'  
import ViewEmployees from './components/ViewEmployees'
import ViewEmpProfile from './components/ViewEmpProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>HR Portal Application</h2>

     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/hr-dashboard' element={
       <ProtectedRouter>
        <HrDashboard/>
      </ProtectedRouter>
        }>
          <Route path = 'viewEmployees' element={<ViewEmployees/>}> </Route>
        </Route>
      <Route path='/employee-dashboard' element={
        <ProtectedRouter>
        <EmployeesDashBoard/>
        </ProtectedRouter>
      }>
        <Route path = 'viewEmpProfile' element={<ViewEmpProfile/>}></Route>
      </Route>
     </Routes>
    </>
  )
}

export default App

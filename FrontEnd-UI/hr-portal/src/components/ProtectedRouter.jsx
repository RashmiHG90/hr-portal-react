import { isAuthenticated } from "../service/loginService"
import { Navigate } from "react-router-dom"

function ProtectedRouter(props){
   console.log(isAuthenticated())
   if(!isAuthenticated()){
    console.log("")
    return <Navigate to ='/'/>
   }
    return props.children
   }


export default ProtectedRouter
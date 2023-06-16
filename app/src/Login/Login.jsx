import { useState } from"react";
import Home from "../Home/Home"
import {Link} from  "react-router-dom";
import "./Login.css"


function Login(){
    const [ login,setLogin]= useState ("")
    const[password,setPassword]=useState("")
    const [booleanTrue, setBooleanTrue]=useState(true)
  function clickMe(){
if(login==="Vika" && password==="2005"){
    setBooleanTrue(false)
  }
}
    return(
        <>
        {
         booleanTrue ?<div className="login-contiener" >
            
            <div >
                
                <div>
                <input onChange={(event)=>{setLogin(event.target.value)}}></input>
                    
                </div>
                
                <div>
                <input type="password" onChange={(event)=>{setPassword(event.target.value)}}></input>
                </div>
                <div>
                <button onClick={clickMe}>Login</button>
                <Link to="/Registr"><button>Registr</button></Link>
              </div>
            </div>
        </div>:
        <Home/>}

        </>
    )
}
export default Login;
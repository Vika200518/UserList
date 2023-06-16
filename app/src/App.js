
import Login from "./Login/Login";
import './App.css';
import Useffect from "./Useffect/Useffect.jsx";
import Button from "./Button/Button.jsx"
import { useState } from "react";
import  Component5  from "./UseContext/UseContext.jsx"
import { Router } from "react-router-dom";
import RouterReact from "./RouterReact/RouterReact";


function App() {
  const [user,setUser]=useState(0)
  function users(){
    setUser(user+1)
  }

// const [clickMe,setClickMe]=useState(10)
// function click(){
//   setClickMe(clickMe+1)
// }
// function click2(){
//   setClickMe(clickMe-1)
// }
  return (
    <div className="app">
      <Login/>
      <RouterReact/>
      </div>
  )

  }
  


export default App;

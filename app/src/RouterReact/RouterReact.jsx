import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";

import Login from "../Login/Login";
import UserList from "../UserList/UserList";
import Home from "../Home/Home"
import Contact from "../Contact/Contact";
import Registr from "../Registr/Registr";



 function RouterReact() {
  return (
  
      <Routes>
          <Route index path="Login" element={<Login />} />
          <Route path="UserList" element={<UserList />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Registr" element={<Registr/>} />
      </Routes>
    
  );
}
export default RouterReact
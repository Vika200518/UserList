import { Outlet, Link } from "react-router-dom";
import UserList from "../UserList/UserList";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul className="ul">
          <li className="contenier3">
            <Link className="link1" to="/Home">Home</Link>
          </li>
          <li className="contenier3">
            <Link className="link1" to="/UserList">UserList</Link>
          </li>
          <li className="contenier3">
            <Link className="link1" to="/Contact">Contact</Link>
          </li>
          <li className="contenier3">
            <Link className="link1" to="/Login">Login</Link>
          </li>
        </ul>
      </nav>

      {/* <Outlet /> */}
    </>
  )
};

export default Layout;
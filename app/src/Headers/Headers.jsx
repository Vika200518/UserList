import{ useState} from "react";
import "./Headers.css";
import Layout from "../Layout/Layout";


function Headers(){
    const [click,setClick] = useState("button")
    const [color,setColor]=useState("blue")
    function clickmy(){
        setClick("click on me")
        setColor("red")
    }
    return(
        <header className="title">
            <Layout/>
             {/* <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>UserList</li>
                    <li>Contact</li>
                    <li>LogAut</li>
                </ul>
            </nav>  */}
        </header>
    )
}
export default Headers;
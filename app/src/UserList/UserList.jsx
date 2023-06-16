import { useEffect, useState } from "react";
import "./UserList.css";

import Headers from "../Headers/Headers.jsx"
import Footer from "../Footer/Footer";

function UserList() {
  const [modal,setModal] = useState(true)
  const [name,setName] = useState(true)
  const [lastName,setLastName] = useState(true)
  const [age,setAge] = useState(true)
  const [city,setCity] = useState(true)
  const [email,setEmail] = useState(true)
  const [user,setUser]=useState([
    {
        id:1,
        name:"Vika",
        lastName:"Baghdasaryan",
        age:17,
        email:"Vika@gmail.com",
        city:"Armenia"
    },
    {
        id:2,
        name:"Jon",
        lastName:"Smit",
        age:35,
        email:"Jon@gmail.com",
        city:"America",
    },
    {
        id:3,
        name:"Gevorg",
        lastName:"Gevorgyan",
        age:61,
        email:"Gev@gmail.com",
        city:"USA",
    },

    {
    id:4,
    name:"Aram",
    lastName:"Asatryan",
    age:57,
    email:"Aram@gmail.com",
    city:"Gyumry",
}

    ])

  //   async  function api(){
  //    await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))}
function click(){
  setModal(!modal)
  console.log(":ciofhcofisl");
}
  return (<div className="content-userList">
    <Headers />
    <div className="conteiner">
      <div className="max-widht">
        {user.map((item) =>

          <div className="contiener-userList" key={item.id}>

            <div className="contiener-userList-name">
              <p>{item.name},</p>
              <p> {item.lastName},</p>
            </div>
            <div className="contiener-userList-data">
              <p> {item.email},</p>
              <p> {item.age},</p>
              <p>{item.city}</p>
            </div>
          </div>
        )}
      </div>
      <div className="button1">
      <button  className="button" onClick={click}> AddUser

      </button>
    </div>
    </div>
    
   {modal ? null : <div className="content-userList-modal">
<div className="content-userList-modal-card">
  <div className="input">
  <div>
<input onChange={(e)=>setName(e.target.value)}></input>

  </div>
  <div>
<input onChange={(e)=>setLastName(e.target.value)}></input>
  </div>
  <div>
<input onChange={(e)=>setAge(e.target.value)}></input>
  </div>
  <div>
<input onChange={(e)=>setCity(e.target.value)}></input>
  </div>
  <div>
<input onChange={(e)=>setEmail(e.target.value)}></input>
  </div>

  </div>
  <button className="div" onClick={()=>{setUser([
    ...user,
    {
      id:Math.random(),
      name:`${name}`,
      lastName:`${lastName}`,
      age:`${age}`,
      email:`${email}`,
      city:`${city}`,
  }]
  )}}>
onClick
  </button>
</div>

    </div>}
    <Footer></Footer>
  </div>
  )
}


export default UserList



























































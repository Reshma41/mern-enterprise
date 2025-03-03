import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Adminlo() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    let mail='admin@gmail.com';
    let pass='admin123'
    const navigate=useNavigate

    const doLogin=(e)=>{
        e.preventDefault();
        if(mail==email&&pass==password){
            alert("Logined Successfully")
            navigate('/Adminhome')
        }
        else{
            alert("Username or password is incorrect")
        }


    }

  return (
    <div>
        <form onSubmit={doLogin}>
      <h2>Admin Login</h2>
      <div><input type="email"placeholder="enter your email"value={email}onChange={changefn}></input></div>
      <div><input type="password"placeholder="enter your password"value={password}onChange={changefn}></input></div>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Adminlo

/*import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Signin() {
  const navigate=useNavigate()
    const [data,setData]=useState({
        email:"",
        password:""

    })
    const changefn=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const sub=async(a)=>{
        a.preventDefault();
        console.log("data",data);
        try{

        
        
        const res= await axios.post("http://localhost:3500/login",data,{
        headers: {
          "Content-Type": "application/json"
      }
    });
    

      
      if (res.status==200){
        localStorage.setItem('user',JSON.stringify(res.data.user));
        alert(res.data.message);
        navigate('/Homepage');
      }
    }
     
    }
  return (
    <div>
      <h2>Signin</h2>
        <form onSubmit={sub}>

            <div>
      <label>Email:<input type="email"placeholder="Enter your email"name="email"onChange={changefn}required></input></label></div>
        <div><label>Password:<input type="password"placeholder="Enter your password"name="password"onChange={changefn}required></input></label></div>
        <button type="submit">ADD</button><p>Don't you have an account</p><Link to='/Signup'>create one</Link>
        <div>
        <Link to='/forgotpass'>Forgot password</Link><link to="/forgotpass"></link>
        </div>
        </form>
    </div>
  )
}

export default Signin*/
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  const changefn = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sub = async (a) => {
    a.preventDefault();
    console.log("data", data);
    try {
      const res = await axios.post(
        "http://localhost:3500/login",
        data,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        alert(res.data.message);
        navigate('/Homepage');
      }
    } catch (err) {
      console.error("err", err);
      setErrorMessage(
        err.response?.data?.message || "An error occurred during login. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Signin</h2>
      <form onSubmit={sub}>
        <div>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={changefn}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={changefn}
              required
            />
          </label>
        </div>
        <button type="submit">Sign In</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <p>Don't have an account?</p>
        <Link to='/Signup'>Create one</Link>
        <div>
          <Link to='/forgotpass'>Forgot password</Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;*/
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  const changefn = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sub = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message
    console.log("Submitting data:", data);

    try {
      const res = await axios.post(
        "http://localhost:1005/login",
        data,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (res.status === 200) {
        // Store user info in local storage
        localStorage.setItem('user', JSON.stringify({id:res.data.user.id,name:res.data.user.name,email:res.data.user.email}));
        alert(res.data.message);
        navigate('/Homepage');
      }
    } catch (err) {
      console.error("Error during login:", err);
      setErrorMessage(
        err.response?.data?.message || "An error occurred during login. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Signin</h2>
      <form onSubmit={sub}>
        <div>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={data.email}
              onChange={changefn}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={data.password}
              onChange={changefn}
              required
            />
          </label>
        </div>
        <button type="submit">Sign In</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <p>Don't have an account?</p>
        <Link to='/Signup'>Create one</Link>
        <div>
          <Link to='/forgotpass'>Forgot password</Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;


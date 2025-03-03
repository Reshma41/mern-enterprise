import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    designation: "",
    Yoj: "",
    gender: ""
  });

  // Change function for form inputs
  const changefn = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  // Form submit handler
  const sub = (e) => {
    e.preventDefault();
    console.log("Form data:", data);

    axios.post("http://localhost:1005/adduser", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      console.log("Submit response:", res);
      alert("Signup Successful!");
      navigate('/');  // Navigate to home after successful signup
    })
    .catch((err) => {
      console.log("Error:", err);
      alert("Error in signup. Please try again.");
    });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={sub}>
        <div>
          <label>Name:
            <input 
              type="text" 
              placeholder="Enter your Name" 
              name="name" 
              onChange={changefn} 
              required 
            />
          </label>
        </div>
        <div>
          <label>Email:
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
          <label>Password:
            <input 
              type="password" 
              placeholder="Enter your password" 
              name="password" 
              onChange={changefn} 
              required 
            />
          </label>
        </div>
        {/* If you want to use other fields like designation, Yoj, or gender, you can add corresponding form elements */}
        {/* Example */}
        <div>
          <label>Designation:
            <input 
              type="text" 
              placeholder="Enter your designation" 
              name="designation" 
              onChange={changefn} 
            />
          </label>
        </div>
        <div>
          <label>Yoj:
            <input 
              type="text" 
              placeholder="Enter year of Join" 
              name="Yoj" 
              onChange={changefn} 
            />
          </label>
        </div>
        <div>
          <label>Gender:
            <select name="gender" onChange={changefn}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;

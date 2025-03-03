
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams() || JSON.parse(localStorage.getItem("user")).id;

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Check if `id` is valid before making the API call
    if (id) {
      console.log("Fetching data for ID:", id);
      //axios.get(`http://localhost:3501/getUser/userId`)
      axios.get(`http://localhost:1005/getUser/${id}`)

        .then(result => {
          setName(result.data?.name || "");
          setEmail(result.data?.email || "");
          setDesignation(result.data?.designation || "");
          
          
          
        })
        .catch(err => {
          console.error("Error fetching user data:", err);
          alert("Failed to fetch user data.");
        });
    } else {
      console.error("No ID provided");
      alert("Invalid user ID");
    }
  }, [id]);

  const update = (e) => {
    e.preventDefault();

    // Validate input fields before making the update call
    if (!name || !email) {
      alert("Both name and email fields are required!");
      return;
    }

    //axios.put(`http://localhost:3501/updateUser/userId`, { name, email })
    axios.put(`http://localhost:1005/updateUser/${id}`, { name, email })

      .then(() => {
        alert("Updated Successfully");
        navigate('/Homepage');
      })
      .catch(err => {
        console.error("Error updating user:", err);
        alert("Failed to update user.");
      });
      if (!id) {
        console.error("No ID provided");
        alert("Invalid user ID");
        return;
      }
      
  };

  return (
    <div>
      <form onSubmit={update}>
        <h2>Update User</h2>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;


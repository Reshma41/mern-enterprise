import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
      setIsLoading(false);
    } else {
      navigate("/"); // Redirect if user not logged in
    }
  }, [navigate]);

  
  const handleDeleteAccount = () => {
    axios.delete(`http://localhost:1005/deleteUser/${user.id}`)
      .then(res => {
        console.log(res);
        alert("Account deleted successfully!");
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch(err => {
        console.error("Error deleting account:", err);
        alert("There was an error deleting your account. Please try again.");
      });
  };


















  

  const handleUpdateProfile = () => {
    navigate(`/Update/${user.id}`); // Pass user ID to the Update page
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  if (isLoading) {
    return <div>Loading...</div>; // Add a spinner for better UX
  }

  if (!user) {
    return <div>No user data found. Please sign in again.</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
}

export default Homepage;

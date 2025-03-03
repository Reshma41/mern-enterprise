import React, { useEffect, useState } from 'react'

function Adminhome() {

  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
  useEffect(()=>{
    const fetchUsers= async()=>{
      try{
         const response= await fetch("http://localhost:9999/viewusers");
         if(!response.ok){
          throw new Error("Failed to fetch users");
         }
         const data=await response.json();
         setUsers(data);
      }
      catch(err){
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
    };
    fetchUsers();
  },[]);
  if(loading) return <div>Loading</div>;
  if(error) return <div>Error:{error}</div>
  return (
    <div>
      <h2>Admin-Panel</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Yoj</th>
            <th>Gender</th>
            </tr>
            </thead>
            <tbody>
              {users.map((user)=>(<tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.designation}</td>
                <td>{user.yoj}</td>
                <td>{user.gender}</td>
                </tr>))}
            </tbody>
            </table>
    </div>
  )
}

export default Adminhome

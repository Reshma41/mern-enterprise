import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Homepage from "./Component/Homepage";
import AdminLogin from "./Component/Adminlogin";
import Update from "./Component/Update";
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div >
      
      <Router>
      <Routes>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/" element={<Signin/>}/>
  
      <Route path="/Homepage" element={<Homepage />} />

      <Route path="/Adminlogin" element={<AdminLogin/>}/>

      <Route path="/Update/:id" element={<Update />} />

      <Route path="/Update" element={<Update />} />



      </Routes>
    </Router>
    </div>
  );
}

export default App;

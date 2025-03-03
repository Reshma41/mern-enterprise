import react from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let mail='admin@gmail.com';
    let pass='admin123'

    let navigate=useNavigate();

    const doLogin = (e) => {
        e.preventDefault(); 


        if (mail==email && pass==password) {
            toast.success('Loggedin Successfully')
            navigate('/Adminhome')
        }else{
            toast.error('Username or Password is incorrect')
        }
    };
    return(
        <div>
            <h2>AdminLogin</h2>
            <form onSubmit={doLogin}>
            <div> <input type="email" placeholder="Enter email"value={email} onChange={(e)=>{setEmail(e.target.value);}}></input></div>
            <div> <input type="password" placeholder="Enter password"value={password} onChange={(e)=>{setPassword(e.target.value);}}></input></div>
            <button type="submit">Submit</button>

            </form>

        </div>
    )
}export default AdminLogin
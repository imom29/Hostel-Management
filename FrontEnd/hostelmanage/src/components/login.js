import React,{useState} from 'react';
import {
    Link
  } from "react-router-dom";
  import { useNavigate } from 'react-router'
import '../css/login.css';
const Login = () => {

   let navigate = useNavigate();
   const [credentials,setCredentials] = useState({email:"",password:""});
   const handleSubmit = async (e)=>{
      e.preventDefault();
          const response = await fetch(`http://localhost:5000/api/auth/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({email:credentials.email,password:credentials.password})
            });
            const json = await response.json();
            console.log(json)
            if(json.success){
                //Save the token and redirect to home
                localStorage.setItem('token',json.authtoken);
                alert("Logged In Successfully")
                navigate("/")
            }else{
               alert("Invalid Details");
            }
  }
   const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]:e.target.value})
  }
  return (
    <div className="center">
    <div className="container">
       <div className="text">
          Login Form
       </div>
       <form onSubmit={handleSubmit}>
          <div className="data">
             <label>Email</label>
             <input type="text" required placeholder='e.g.username@gmail.com' name='email' value={credentials.email} onChange={onChange}/>
          </div>
          <div className="data">
             <label>Password</label>
             <input type="password" required placeholder='password' name='password' value={credentials.password} onChange={onChange}/>
          </div>
          {/* radio button */}
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  checked/>
              <label className="form-check-label" forhtml="flexRadioDefault1">
                Student
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" forhtml="flexRadioDefault2">
                Admin
              </label>
          </div>

          {/* radio button */}
          <div className="forgot-pass">
             <a href="#">Forgot Password?</a>
          </div>
          <div className="btn">
             <div className="inner"></div>
             <button type="submit">login</button>
          </div>
          <div className="signup-link">
             Not a member? <Link to="/signup">Register</Link>
          </div>
       </form>
    </div>
 </div>
  )
}

export default Login;

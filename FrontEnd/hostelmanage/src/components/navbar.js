import React from 'react';
import {
  Link
} from "react-router-dom";
import { useNavigate } from 'react-router';
import "../css/header-9.css"
import "../css/reset.min.css"
import "../css/style.css"
// import "../js/header-9"
import menu from "../icons/menu.png"
// import Login from './login';

function Navbar() {
  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }
    return (
      <div className="App">
        <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
          <a href="#" className="brand">Brand</a>
        </div>
        <div className="site-header__middle">
          <nav className="nav">
            <button className="nav__toggle" aria-expanded="false" type="button">
              <img className="menuicon" src={menu}/>
            </button>
            <ul className="nav__wrapper">
              <li className="nav__item"><a href="#">Home</a></li>
              <li className="nav__item"><a href="#">About</a></li>
              <li className="nav__item"><a href="#">Services</a></li>
              <li className="nav__item"><a href="#">Hire us</a></li>
              <li className="nav__item"><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="site-header__end">
          {/* <a className="button" href="#"> Login</a> */}
          {/* <Link className="button" to="/login" role="button"><i className="fas fa-sign-in-alt mx-1"></i>LogIn</Link> */}
          {!localStorage.getItem("token")?<><Link className="button" to="/login" role="button"><i className="fas fa-sign-in-alt mx-1"></i>LogIn</Link>
        <Link className="button" to="/signup" role="button"><i className="fas fa-user-plus mx-1"></i>SignUp</Link></>:
        <button className="button"onClick={handleLogout}><i className="fas fa-sign-out-alt"></i>Log Out</button>}
        </div>
      </div>
    </header>
      </div>
      
    );
  }
  
  export default Navbar;


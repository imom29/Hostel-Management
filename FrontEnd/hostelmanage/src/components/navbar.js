import react from 'react';
import "../css/header-9.css"
import "../css/reset.min.css"
import "../css/style.css"
import "../js/header-9"
import menu from "../icons/menu.png"

function Navbar() {
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
          <a className="button" href="#">Sign in</a>
        </div>
      </div>
    </header>
      </div>
    );
  }
  
  export default Navbar;


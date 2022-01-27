import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/Signup';
import Home from './components/Home';
import Cards from './components/cards';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
        <Navbar />
        {/* <div className="container"> */}
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="/about" element={<About/>} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        {/* <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} /> */}
        </Routes>
        {/* </div> */}
        <Cards/>
      </Router>
    </div>
  );
}

export default App;

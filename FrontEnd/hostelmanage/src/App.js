import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
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
      </Router>
    </div>
  );
}

export default App;

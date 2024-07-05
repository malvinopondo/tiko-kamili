import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from "./Components/Contact";
import Schedule from "./Components/Schedule";
import Login from "./Components/Login"


function App() {
  return (
    <div className="App">
      <Navbar />
     <Contact />
     <Schedule />
     <Login />
    </div>
  );
}

export default App;

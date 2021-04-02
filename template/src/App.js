import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import "aos/dist/aos.css";

import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import PrsonalInfo from "./components/PrsonalInfo";
import ContectInfo from "./components/ContectInfo";
import Experties from "./components/Experties";
import Works from "./components/Works";
// import TT from "./components/TT";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import News from "./components/News";
import { useEffect } from "react";





function App() {
  useEffect(() => {
    AOS.init({duration:1000});
  }, [])
  return (
    <div className="App row m-0 bg-light">
     
      

      <div className="col-12 Home-div vh-100 p-0"><Home /></div>
      <div className="col-12 h-100 Nav-div">
        <div className="row h-100">
          <div className="col-12"><Navbar /></div>
          <div className="col-12 align-self-center mt-5"><PrsonalInfo /></div>
          
          <div className="col-12 align-self-end mb-5"><ContectInfo /></div>
        </div>
      </div>

      <Experties/>
      <Works/>
      
      <About/>
      <Testimonial/>
      
      <News/>
      {/* <TT /> */}
    </div>
    
  );
}

export default App;

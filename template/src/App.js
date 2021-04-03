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
// import News from "./components/News";
import { useEffect } from "react";
import Footer from "./components/Footer";





function App() {
  useEffect(() => {
    AOS.init({duration:1000});
  }, [])
  return (
    <div className="App  bg-light">
      <div className="col-12 Home-div vh-100 p-0 position-absolute"><Home /></div>
      <div className="col-12 Nav-div fixed-top m-0 p-0"><Navbar /></div>


      <div className="container vh-100 ">
        <div className="row h-100 justify-content-center">
          <div className="col-12 align-self-center position-absolute"><PrsonalInfo/></div>
          <div className="col-12 align-self-end pb-5 "><ContectInfo/></div>
        </div>
      </div>

     <Experties/>
     <Works/>
     <About/>
     <Testimonial/>
     <Footer/>
     

      
    
      {/* <TT /> */}
    </div>
    
  );
}

export default App;

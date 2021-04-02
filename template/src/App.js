import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Prsonal_info from "./components/Prsonal_info";
import ContectInfo from "./components/ContectInfo";
import Experties from "./components/Experties";
import Works from "./components/Works";
import Tee from "./components/Tee";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import News from "./components/News";




function App() {
  return (
    <div className="App row m-0 bg-light">
     
      

      <div className="col-12 Home-div vh-100 p-0"><Home /></div>
      <div className="col-12 h-100 Nav-div">
        <div className="row h-100">
          <div className="col-12"><Navbar /></div>
          <div className="col-12 align-self-center mt-5"><Prsonal_info /></div>
          <div className="col-12 align-self-end mb-5"><ContectInfo /></div>
        </div>
      </div>

      <Experties/>
      <Works/>
      {/* <Tee/> */}
      <About/>
      <Testimonial/>
      
      <News/>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Explorecareer from "./components/Explorecareer"
import { Route, Routes } from "react-router-dom"
import Webdev from "./components/Webdev";
import Careers from "./components/Careers";


function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explorecareer" element={<Explorecareer />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
  </> 
  );
} 

export default App;

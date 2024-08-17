import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Explorecareer from "./components/Explorecareer"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorecareer" element={<Explorecareer />} />
        </Routes>
      </div>
  </> 
  );
} 

export default App;

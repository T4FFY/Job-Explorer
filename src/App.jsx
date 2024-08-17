import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Pricing from "./components/Pricing"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
  </> 
  );
} 

export default App;

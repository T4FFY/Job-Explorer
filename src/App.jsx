import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Explorecareer from "./components/Explorecareer"
import { Route, Routes } from "react-router-dom"
import Webdev from "./components/Webdev";
import Careers from "./components/Careers";
import PersonalityQuiz from "./components/PersonalityQuiz";
import Favorites from "./components/Favorites";
// import QandA from "./components/QandA";

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
          <Route path="/quizzes" element={<PersonalityQuiz />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* <Route path="/qa" element={<QandA />} /> */}
        </Routes>
      </div>
  </> 
  );
} 

export default App;

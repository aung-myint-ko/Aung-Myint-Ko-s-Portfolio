import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Qualification from "./components/Qualification";
import SoftSkill from "./components/SoftSkill";
import TechnicalSkill from "./components/TechnicalSkill";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({ duration: 1300, offset: 30 });
function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <About />
        <TechnicalSkill />
        <SoftSkill />
        <Qualification />
        <Project />
        <Contact />
      </Router>
    </>
  );
}

export default App;

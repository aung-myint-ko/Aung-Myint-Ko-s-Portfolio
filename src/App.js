import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Qualification from "./components/Qualification";
import TechnicalSkill from "./components/TechnicalSkill";
import Loading from "./components/Loading";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect, useState } from "react";
// ..
AOS.init({ duration: 1300, offset: 30, once: true });
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <div id="skills">
            <TechnicalSkill />
            <Qualification />
          </div>
          <Project />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;

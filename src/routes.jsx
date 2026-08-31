import { Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import Contact from "./components/Contact";




const AppRoutes = ({ darkMode }) => {

  return (

    <Routes>


      {/* Home */}

      <Route

        path="/"

        element={
          <Home darkMode={darkMode} />
        }

      />



      {/* About */}

      <Route

        path="/about"

        element={
          <About darkMode={darkMode} />
        }

      />



      {/* Skills */}

      <Route

        path="/skills"

        element={
          <Skills darkMode={darkMode} />
        }

      />



      {/* Projects */}

      <Route

        path="/projects"

        element={
          <Projects darkMode={darkMode} />
        }

      />



      {/* Certifications */}

      <Route

        path="/certifications"

        element={
          <Certifications darkMode={darkMode} />
        }

      />



      {/* Blog */}

      <Route

        path="/blog"

        element={
          <Blog darkMode={darkMode} />
        }

      />



      {/* Contact */}

      <Route

        path="/contact"

        element={
          <Contact darkMode={darkMode} />
        }

      />



     

     



    </Routes>

  );

};


export default AppRoutes;
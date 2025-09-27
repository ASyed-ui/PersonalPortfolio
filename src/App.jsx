import { useState } from "react"; 
import { Routes, Route } from "react-router-dom"; // React Router for SPA navigation
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Services } from "./components/sections/Services";
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false); // Loading screen state
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  
  return (
    <>
      {/* Show loading screen until animation completes */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {/* Navbar and mobile menu */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        {/* Define routes for different sections */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          {/* About page */}
          <Route path="/about" element={<About />} />
          {/* Projects page */}
          <Route path="/projects" element={<Projects />} />
          {/* Services page */}
          <Route path="/services" element={<Services />} />
          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

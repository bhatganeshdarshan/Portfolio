import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <br></br>
      <About/>
      <Skills darkMode={darkMode}/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;

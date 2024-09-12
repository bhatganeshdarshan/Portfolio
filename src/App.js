import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <br></br>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;

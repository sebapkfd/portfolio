import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;

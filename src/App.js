import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/portfolio/projects/:id'>
            <ProjectPage/>
          </Route>
          <Route exact path='/portfolio/projects'>
            <Projects/>
          </Route>
          <Route path='/portfolio'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

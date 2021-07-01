import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path={'/projects/:id'}>
            <ProjectPage/>
          </Route>
          <Route exact path={'/projects'}>
            <Projects/>
          </Route>
          <Route exact path={'/home'}>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

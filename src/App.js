import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/Projects'}>
            <Projects/>
          </Route>
          <Route exact path={'/Home'}>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

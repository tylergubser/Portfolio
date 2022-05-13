import './App.css';
import Navbar from './components/Navbar'
import { Route, Switch } from "react-router-dom";
import Resume from "./components/Resume"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Blogs from "./components/Blogs"

function App() {
  return (
    <div className="mb-auto">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/resume">
          <Resume/>
        </Route>
        <Route exact path="/projects">
          <Projects/>
        </Route>
        <Route exact path="/blogs">
          <Blogs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

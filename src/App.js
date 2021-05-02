import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from './components/Pages/About/About';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Projects from './components/Pages/Projects/Projects';
import Blog from './components/Pages/Blog/Blog';
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'>
          <ContactUs />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/blog'>
          <Blog />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;

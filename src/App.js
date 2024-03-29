import React from 'react';
import './styles/App.css';
import About from './containers/About'
import Home from './containers/Home'
import Experiences from './containers/Experiences'
import Projects from './containers/Projects'
import Resume from './containers/Resume'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/about" component= {About} />
      <Route exact path = "/experiences" component= {Experiences} />
      <Route exact path = "/projects" component = {Projects} />
      <Route exact path = "/resume" component= {Resume} />
    </div>
  )
}

export default App

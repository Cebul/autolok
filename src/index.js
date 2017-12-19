import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Template from './components/Template'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './index.css'

injectTapEventPlugin() // function for touch screens

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Template} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>,
  document.getElementById('root'))

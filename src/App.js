import React, { useEffect } from 'react';
import './App.css';
import Contacts from './pages/Contacts.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <div className="ontainer py-5">
              <About />
            </div>
          </Route>
          <Route path="/contacts">
            <div className="App container py-5">
              <Contacts />
            </div>
          </Route>
          <Route path="/">
            <div className="ontainer py-5">
              <Home />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

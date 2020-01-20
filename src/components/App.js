import React from 'react';
/*Libraries*/
import {
  BrowserRouter as Router,
  Switch, NavLink, Route
}
  from "react-router-dom"
/* component*/
import Home from '../views/Home'
import About from '../views/About'
import Credit from '../views/Credit'
import Info from '../views/Info'
import Food from '../views/Food'

import '../styles/App.scss';



function App() {
  return (
    <div className="App">

      <Router>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/credit">Credit</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/Food">Food</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/Info">Info</NavLink>
              </li>

            </ul>
          </div>
        </nav>
        <i className="fab fa-react fa-5x"></i>


        <header className="App-header">
          <Switch>
            {/* making the content of the web page*/}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/credit" component={Credit} />
            <Route path="/Food" component={Food} />
            <Route path="/Info" component={Info} />

          </Switch>

        </header>
      </Router>
      <footer>
        this is the footer
      </footer>
    </div>
  );
}

export default App;

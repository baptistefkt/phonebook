import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Update from './pages/Update';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={Add} />
    <Route exact path="/update" component={Update} />
  </Router>
);

export default App;

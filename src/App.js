import React from 'react';
import './App.css';

import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import AboutCompany from './pages/AboutCompany';
import Navigation from './components/Navigation';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about/us" component={AboutCompany} />
          <Route exact path="/about/company" component={AboutUs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Main from './pages/Main';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/service/:service" component={Services} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

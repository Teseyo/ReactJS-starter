import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Regf from './pages/regf.jsx';

const app = <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/regf' component={Regf} />
      </Switch>
</BrowserRouter>;


ReactDOM.render(
  app,
  document.getElementById('root')
);



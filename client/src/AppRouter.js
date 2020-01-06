import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import User from './pages/user/User';
import Product from './pages/product/Product';
import App from './components/App/App';

const routing = (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={User} />
      {/* <Route path="/users/:id" component={Users} /> */}
      <Route path="/products" component={Product} />
      <Route path="/api" component={App} />
  </Router>
)

export default routing;
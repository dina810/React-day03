import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'


import React from "react";
import {
  BrowserRouter,Route,Switch} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path={'/'} exact component={Product}/>
      <Route path={'/product-details/:id'}  component={ProductDetails}/>
      <Route path={'*'} exact component={NotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

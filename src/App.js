import './App.css';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'


import React from "react";
import { BrowserRouter, Route , Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/product-details/:id'  element={<ProductDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

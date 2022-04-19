import './App.css';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie'
import MovieDetails from './pages/MovieDetails'


import React from "react";
import { BrowserRouter, Route , Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Movie/>}/>
      <Route path='/product-details/:id'  element={<MovieDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

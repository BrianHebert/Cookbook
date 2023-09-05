import { useState } from 'react'
import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/home'
import Recipes from './pages/recipes'
import Products from './pages/prducts'
import RecipeInstructions from './pages/recipeInstructions'
import RecipeApiIngredients from './pages/recipeApiIngredients';
import recipesData from "./recipesData"


function App() { 
  


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/recipeInstructions" element={<RecipeInstructions />}/>
          <Route path="/RecipeApiIngredients" element={<RecipeApiIngredients />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

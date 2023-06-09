import React from "react"
import reactLogo from '../assets/react.svg'
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="Nav">
            <Link to={"/"}><img src={reactLogo} className="logo"/></Link>
            <Link to={"/recipes"}>Recipes</Link>
            <Link to={"/products"}>Products</Link>
        </div>
    )}
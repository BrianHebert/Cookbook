import React from "react"
import reactLogo from '../assets/react.svg'
import { NavLink } from "react-router-dom"
import styled from "styled-components";

const linkStyle ={
    textDecoration: "none",
    color : "black",
    paddingLeft: "20px"
}

const NavbarStyling = styled.ul`
    display: flex;
    font-size: 30px;
    text-decoration: none;
    align-items: center;
    border: red 2px solid;
    margin:0px;
    padding:20px;
    
    .logo{
        width: 200px;
        max-height: 100px;
    }
 
`;

export default function Navbar(){
    return(
        <NavbarStyling>
            <NavLink to={"/"}><img src={reactLogo} className="logo"/></NavLink>
            <NavLink 
                to={"/recipes"} style={linkStyle}>Recipes
            </NavLink>
            <NavLink 
                to={"/products"} style={linkStyle}>Products
            </NavLink>
        </NavbarStyling>
    )}
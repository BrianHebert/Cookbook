import React from "react"
import reactLogo from '../assets/react.svg'
import { NavLink } from "react-router-dom"
import styled from "styled-components";

const linkStyle ={
    color : "black",
    paddingLeft: "20px"
}

const NavbarStyling = styled.ul`
    display: flex;
    font-size: 30px;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 10px rgb(226, 215, 181);
    margin:0px;
    padding:20px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
 
`;

export default function Navbar(){
    return(
        <NavbarStyling>
            <NavLink 
            to={"/"} style={linkStyle}>Home
            </NavLink>
            <NavLink 
                to={"/recipes"} style={linkStyle}>Recipes
            </NavLink>
            <NavLink 
                to={"/search"} style={linkStyle}>Search
            </NavLink>
        </NavbarStyling>
    )}
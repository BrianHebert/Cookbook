import React from "react";
import recipesData from "../recipesData";
import { NavLink } from "react-router-dom"
import styled from "styled-components";

const HomeStyling = styled.ul`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    h1{
        font-size: 50px;
        text-align: center;
    }
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        max-width: 800px;
    }
    .recipeDetails{
        text-align: center;
    }
`

export default function Home(){
   
    const featuredRecipe = []
    for (let i = 0; i < recipesData.data.recipes.length; i++) {
        if (recipesData.data.recipes[i].isFeatured == "True" ) {
            featuredRecipe.push(recipesData.data.recipes[i]);
        }
    }
    

    return(
        <HomeStyling>
            <h1>Receipe of The Week</h1>
            <NavLink to= "/recipeInstructions" state={{url: featuredRecipe[0].url, ingredients: featuredRecipe[0].ingredients, preperation: featuredRecipe[0].preperation, name: featuredRecipe[0].name}}><img src={featuredRecipe[0].url}></img></NavLink>
            <h2 className="recipeDetails">{featuredRecipe[0].name}: {featuredRecipe[0].portion}</h2>
            
        </HomeStyling>
    )
}
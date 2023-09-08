import React from "react";
import {useLocation} from 'react-router-dom'
import styled from "styled-components";

const RecipeStyling = styled.div`
    white-space: pre-wrap; /* makes it so \n works as a new line */
    margin-right: 20px;
    margin-left: 20px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    img{
        float: right;
        width: 49%;
        display: block;
        
    }
    .recipe{
        font-family: 'Poppins', sans-serif;

    }
    .ingredients{
        margin-top: 0px;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
    }
    h2{
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
    }
`;

export default function recipeApiInstructions(props){
    const location = useLocation();
    const { recipe } = location.state
    const name = recipe.label
    const url = recipe.images.REGULAR.url
    const ingredientArray = recipe.ingredientLines
    let ingredients= ""
    console.log(recipe)
    

    for (let i = 0; i < ingredientArray.length; i++){
        ingredients += JSON.stringify(ingredientArray[i])
    }
    ingredients = ingredients.replace('"', '')
    ingredients = ingredients.replace(/""/g, '\n')
    ingredients = ingredients.replace('"', '')

    return(
        <div>
            <RecipeStyling>
                <img src={url}/>
                <h1 className="recipe">{name}</h1>
                <h2>Ingredients</h2>
                <p className="ingredients">{ingredients}</p>
                
            </RecipeStyling>
        </div>
    )
}
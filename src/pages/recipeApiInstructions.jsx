import React from "react";
import {useLocation} from 'react-router-dom'
import styled from "styled-components";

const RecipeStyling = styled.div`
    white-space: pre-wrap; /* makes it so \n works as a new line */
`;

export default function recipeApiInstructions(props){
    const location = useLocation();
    const { recipe } = location.state
    const name = recipe.label
    const ingredientArray = recipe.ingredientLines
    let ingredients= ""
    console.log(recipe)
    console.log(recipe.label)
    console.log(ingredientArray[0])

    for (let i = 0; i < ingredientArray.length; i++){
        ingredients += JSON.stringify(ingredientArray[i])
    }


    return(
        <div>
            <RecipeStyling>
                <h1 className="recipe">{name}</h1>
                <p>{ingredients.replace(/"/g, '\n')}</p>
                
            </RecipeStyling>
        </div>
    )
}
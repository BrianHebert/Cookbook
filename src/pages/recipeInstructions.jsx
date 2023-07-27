import React from "react";
import {useLocation} from 'react-router-dom'
import styled from "styled-components";

const RecipeStyling = styled.div`
    border: 2px red solid;
    margin-right: 20px;
    margin-left: 20px;
    img{
        float: right;
        width: 49%;
        display: block;
        
    }
    .recipe{
       

    }
    .ingredients{
        white-space: pre-wrap; /* makes it so \n works as a new line */
        margin-top: 0px;
        font-size: 20px;
        
    }
    h2{
        margin: 0px;
        padding: 0px;
        
    }
    .preperation{
        white-space: pre-wrap; /* makes it so \n works as a new line */
        margin: 0px;
        width 49%;
        font-size: 20px;
        
    }
`;

export default function recipeInstructions(props){
    const location = useLocation();
    const { url } = location.state
    const { ingredients } = location.state
    const { preperation } = location.state
    const { name } = location.state

    

    return(
        <RecipeStyling>
            <img src={url}/>
            <h1 className="recipe">{name}</h1>
            <h2>Ingredients</h2>
            <p className="ingredients">{ingredients}</p>
            <h2>Instructions</h2>
            <p className="preperation">{preperation}</p>
        </RecipeStyling>
    )
}

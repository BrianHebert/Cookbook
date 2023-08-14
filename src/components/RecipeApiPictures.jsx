import React from "react"
import styled from "styled-components";
import { NavLink } from "react-router-dom"

export default function RecipeApiPictures(props){
    console.log(props)
    const [isHovered, setIsHovered] = React.useState(false)
    function handleHover(){
        setIsHovered(true) 
    }
    function handleUnhover(){
        setIsHovered(false)
    }
    return(
        <div>
            <NavLink to= "/recipeApiInstructions" state={{recipe: props.item.recipe}}><img src={props.item.recipe.image} onMouseOver={handleHover} onMouseOut={handleUnhover}/></NavLink>
            {isHovered && (<p className="recipeName">{props.item.recipe.label}</p>)}
            {isHovered && (<p className="portion">Serves {props.item.recipe.yield}</p>)}
        </div>
    )
}

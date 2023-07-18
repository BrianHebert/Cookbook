import React, { useState } from "react"
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const ImgStyling = styled.ul`
    margin: 10px;
    padding: 10px;
    img{
        width:400px;
    }
`;

export default function RecipePictures(props){
    const [isHovered, setIsHovered] = React.useState(false)
    function handleHover(){
        setIsHovered(true)
    }
    function handleUnhover(){
        setIsHovered(false)
    }
    return(
        <ImgStyling >
            <NavLink to= "/recipeInstructions" state={{url: props.item.url, ingredients: props.item.ingredients, preperation: props.item.preperation, name: props.item.name}}><img src={props.item.url} onMouseOver={handleHover} onMouseOut={handleUnhover}/></NavLink> {/*this allows clicking the picture to pass the props down*/}
            {isHovered && (<p>{props.item.name}</p>)}
        </ImgStyling>
    )
}
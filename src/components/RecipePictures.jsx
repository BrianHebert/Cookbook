import React, { useState } from "react"
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const ImgStyling = styled.ul`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    margin: 10px;
    padding: 10px;
    img{
        width:400px;
        min-height: 266px;
    }
    img:hover{
        filter: brightness(50%)
    }
    .recipeName{
        margin: 0px;            //this is so the other recipes do not move when one is hovered
        height: 0px;            //this is so the other recipes do not move when one is hovered
        position: relative;     //this is so the other recipes do not move when one is hovered
        top: -270px;            //to get the text where i want it over the picture
        width: 400px;
        word-wrap: normal;
        color: white;
        text-align: center;
        font-size: 25px;
        font-family: 'Poppins', sans-serif;
        pointer-events: none;   //fixes bug so when you hover over text the picture still stays hovered too
    }
    .portion{
        margin: 0px;            //this is so the other recipes do not move when one is hovered
        height: 0px;            //this is so the other recipes do not move when one is hovered
        position: relative;     //this is so the other recipes do not move when one is hovered
        top: -50px;            //to get the text where i want it over the picture
        text-align: center;
        color: white;
        font-size: 25px;
        font-family: 'Poppins', sans-serif;
        pointer-events: none;   //fixes bug so when you hover over text the picture still stays hovered too
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
            {isHovered && (<p className="recipeName">{props.item.name}</p>)}
            {isHovered && (<p className="portion">{props.item.portion}</p>)}
        </ImgStyling>
    )
}
import React from "react"
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const ImgStyling = styled.ul`
    margin: 10px;
    padding: 10px;
`;

export default function RecipePictures(props){
    return(
        <ImgStyling >
            <NavLink to= "/recipeInstructions" state={{url: props.item.url}}><img src={props.item.url}/></NavLink>
            <p className="ingredients">{props.item.ingredients}</p>
            <p className="preperation">{props.item.preperation}</p>
        </ImgStyling>
    )
}
import React from "react";
import {useLocation} from 'react-router-dom'

export default function recipeInstructions(props){
    const location = useLocation();
    const { url } = location.state
    const { ingredients } = location.state
    const { preperation } = location.state
    const { name } = location.state
    return(
        <div>
            <img src={url}/>
            <p>{name}</p>
            <p className="ingredients">{ingredients}</p>
            <p className="preperation">{preperation}</p>
        </div>
    )
}

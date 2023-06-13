import React from "react";
import {useLocation} from 'react-router-dom'

export default function recipeInstructions(props){
    const location = useLocation();
    const { url } = location.state
    return(
        <div>
            <img src={url}/>
        </div>
    )
}

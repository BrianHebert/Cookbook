import React from "react"

export default function Recipe(props){
    return(
        <div>
            <img src={props.item.url}/>
            <p className="ingredients">{props.item.ingredients}</p>
            <p className="preperation">{props.item.preperation}</p>
        </div>
    )
}
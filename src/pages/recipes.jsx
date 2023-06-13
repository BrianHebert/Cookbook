import React from "react";
import recipesData from "../recipesData"
import RecipePictures from "../components/RecipePictures.jsx"

export default function Recipes(){
    const recipes = recipesData.data.recipes.map(item => {
        return(
            <RecipePictures 
                key={item.id}
                item={item}
            />
        )
    })

    return(
        <div>
            <section>
                {recipes}
            </section>
        </div>
    )
}
import React from "react";
import recipesData from "../recipesData"
import RecipePictures from "../components/RecipePictures.jsx"
 


export default function Recipes(props){




    const recipesPictures = recipesData.data.recipes.map(item => { // i will use this to display a picture for every recipe in the recipesData.js file
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
                {recipesPictures}
            </section>
        </div>
    )
}
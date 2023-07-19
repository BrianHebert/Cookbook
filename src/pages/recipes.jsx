import React from "react";
import recipesData from "../recipesData"
import RecipePictures from "../components/RecipePictures.jsx"
import styled from "styled-components";
 
const RecipesStyling = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 80%;
    }
    select{
        height:20px;
        margin: 20px;
    }
`;

export default function Recipes(props){

    const [formData, setFormData] = React.useState(
        {
            foodType: ""
        }
    )

    console.log(formData.foodType)

    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const filteredArray = []
    for (let i = 0; i < recipesData.data.recipes.length; i++) {
        if (recipesData.data.recipes[i].type == formData.foodType || formData.foodType == "blank") {
            filteredArray.push(recipesData.data.recipes[i]);
        }
    }
    console.log(filteredArray)
    //that chunk above is to filter the array
    
    let recipeList = filteredArray.sort(() => Math.random() - 0.5) //this makes it so the recipes array is in random order each time
    const recipesPictures = recipeList.map(item => { // i will use this to display a picture for every recipe in the recipesData.js file
        return(
            <RecipePictures 
                key={item.id}
                item={item}
            />
        )
    })
    console.log(recipesData.data.recipes[0].type)
    return(
            <RecipesStyling >
                <section>
                    {recipesPictures}
                </section>
                <select id="foodType"
                        value={formData.foodType}
                        onChange={handleChange}
                        name="foodType"
                >
                    <option value="blank"></option>
                    <option value="Dessert">Dessert</option>
                    <option value="Main Dish">Main Dish</option>
                </select>
            </RecipesStyling>
    )
}
import React from "react";
import recipesData from "../recipesData"
import RecipePictures from "../components/RecipePictures.jsx"
import styled from "styled-components";
 
const RecipesStyling = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h1{
        width: 100%;
        text-align: center;
        font-size: 50px;
        margin-bottom:0px;
    }
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 80%;
    }
    select{
        position: absolute;
        right:0px;
        height:20px;
        margin: 20px;
        top: 127px;
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
        if (recipesData.data.recipes[i].type == formData.foodType || formData.foodType == "All Dishes" || formData.foodType == "") {
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
    let dishes = "All Dishes"
    if (formData.foodType == "Dessert")
        dishes = "Dessert"
    if (formData.foodType == "Main Dish")
        dishes = "Main Dish"

    return(
            <RecipesStyling >
                <h1>{dishes}</h1>
                <section>
                    {recipesPictures}
                </section>
                <select id="foodType"
                        value={formData.foodType}
                        onChange={handleChange}
                        name="foodType"
                >
                    <option value="All Dishes">All Dishes</option>
                    <option value="Dessert">Desserts</option>
                    <option value="Main Dish">Main Dishes</option>
                </select>
            </RecipesStyling>
    )
}
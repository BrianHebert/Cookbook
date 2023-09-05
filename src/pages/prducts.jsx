import React from "react";
import RecipeApiPictures from "../components/RecipeApiPictures";
import styled from "styled-components";

const RecipesStyling = styled.div`
    
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    h1{
        width:100%;
        text-align: center;
        border: red 2px solid;
        margin: 0px;
    }

    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 80%;
    }
    form{
        width:100%;
        border: red 2px solid;
        display: block;
        text-align: center;
    }
`


export default function Products(){

    const [search, setSearch] =  React.useState("") //user input to seach the api
    const [data, setData] =  React.useState("") //data from api
    const [recipieApiPictures, setRecipieApiPictures] = React.useState()
    

    async function callRecipeAPI(){
        const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=b9509d84&app_key=%20d708a080299ed193b245ac513c8e4c50&imageSize=REGULAR&random=true`) //this is edamam api to seach for recipes
        const dataPLz =  await res.json()
        setData(dataPLz)
        console.log(dataPLz)
        await setRecipieApiPictures(dataPLz.hits.map(item => {
            return(
                <RecipeApiPictures 
                    key={item.recipe.label}
                    item={item}
                />
            )
        }))
    }


    return(
        <RecipesStyling>
            <h1>Search Recipies</h1>
            <form>
                <input type="text" onChange={(event) => {setSearch(event.target.value)}}></input>
                <button type="button" onClick={callRecipeAPI}>Search</button>
            </form>
            <section>
                {recipieApiPictures}
            </section>
        </RecipesStyling>
        
    )
}
import React from "react";
import RecipeApiPictures from "../components/RecipeApiPictures";


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
        <div>
            Products
            <form>
                <input type="text" onChange={(event) => {setSearch(event.target.value)}}></input>
                <button type="button" onClick={callRecipeAPI}>callRecipeAPI</button>
            </form>
            <section>
                {recipieApiPictures}
            </section>
        </div>
        
    )
}
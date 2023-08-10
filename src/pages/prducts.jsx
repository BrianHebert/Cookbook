import React from "react";


export default function Products(){

    const [search, setSearch] =  React.useState("")
    const [data, setData] =  React.useState("")
    

    async function callRecipeAPI(){
        const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=b9509d84&app_key=%20d708a080299ed193b245ac513c8e4c50&imageSize=REGULAR&random=true`)
        const data =  await res.json()
        setData(data)
        console.log(data)

    }

    return(
        <div>
            Products
            <form>
                <input type="text" onChange={(event) => {setSearch(event.target.value)}}></input>
                <button type="button" onClick={callRecipeAPI}>callRecipeAPI</button>
            </form>
            {data!="" && (<p>{JSON.stringify(data.hits[0].recipe.label)}</p>)}
        </div>
        
    )
}
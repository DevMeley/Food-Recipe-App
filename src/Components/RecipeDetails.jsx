import style from './RecipeDetails.module.css'

import { useEffect, useState } from "react"

export default function RecipeDetails({foodId}){
    const [recipe, setRecipe] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const apiKey = "677ebbc00ba2428c815735f2119801fc"

    useEffect(()=>{
        const recipeDetails = async () => {
            try {
                const res = await fetch(`${URL}?apiKey=${apiKey}`)
                const data = await res.json()
                console.log(data)
                setRecipe(data)
                setIsLoading(false)
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        recipeDetails()
    }, [foodId])

    return <div className={style.wrapper}>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt="" />
        <div className={style.info}>
            <strong>⏲ Duration: {recipe.cookingMinutes} Minues</strong>
            {recipe.dairyFree ? "🥛Diary" : "Diary Free"}
        </div>
        <div className={style.ingredient}>
            <h2>Ingredients</h2>
            {isLoading? "Loading...." : <p>{recipe.extendedIngredients.map((ingredient) => <li>{ingredient.name}</li> )}</p>}
        </div>
        <div className={style.instructions}>
            <h2>Instructions</h2>
            {isLoading? "Loading...." : <p>
                {recipe.analyzedInstructions[0].steps.map((step) => <p>{step.step}</p>)}
            </p>}
            
        </div>
        
    </div>
}
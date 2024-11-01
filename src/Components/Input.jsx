import { useEffect, useState } from "react"
import style from './Header.module.css'


const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "1a0ff67fc75a4695a9ff375da7991e89"

export default function Input({foodData, setFoodData}){
    const [query, setQuery] = useState("")
    useEffect(() =>{
        const fetchFood = async () => {
        try {
                const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
                const data = await res.json()
                console.log(data.results)
                setFoodData(data.results)
            } catch (error) {
            console.log("Error: ", error)
            }
        }
        fetchFood()
    }, [query])
    
    return <div>
        <form >
            <input 
                type="text"
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
            />
        </form>
    </div>
}
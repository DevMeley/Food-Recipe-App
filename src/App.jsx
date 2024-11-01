import Header from "./Components/Header"
import style from './App.css'
import { useState } from "react"
import FoodList from "./Components/FoodList"
import Container from "./Components/Container"
import InnerContainer from "./Components/InnerContainer"
import RecipeDetails from "./Components/RecipeDetails"

function App() {
    const [foodData, setFoodData] = useState([])
    const [foodId, setFoodId] = useState("715415")
  return (
    <div className="App">
      <div className={style.App}>
        <Header foodData={foodData} setFoodData={setFoodData}/>
        <Container>
          <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData} setFoodData={setFoodData}/>
          </InnerContainer>
          <InnerContainer>
            <RecipeDetails setFoodId = {setFoodId} foodId ={foodId} setFoodData = {setFoodData}/>
          </InnerContainer>
        </Container>
      </div>
    </div>
  )
}

export default App

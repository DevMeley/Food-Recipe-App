import FoodItem from "./FootItemm"
import style from './FoodItemm.module.css'

export default function foodList ({foodData, setFoodData, setFoodId}){

    return <div className={style.style}>
        {foodData.map((food) => 
         <FoodItem setFoodId={setFoodId} food ={food}/>
        )}
    </div>
}
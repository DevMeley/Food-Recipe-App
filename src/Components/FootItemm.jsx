import style from './FoodItemm.module.css'

export default function FoodItem ({food, foodId, setFoodId}){

    return <div>
        <div className={style.foodItem}>
            <img src={food.image} alt="" />
            <h3 key={food.id}>{food.title}</h3>
            <button onClick={() => 
                {console.log(food.id)
                  setFoodId(food.id)
                }}>View Recipe</button>
        </div>
    </div>
}
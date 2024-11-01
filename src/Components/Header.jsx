import style from './Header.module.css'
import Input from './Input'


export default function Header({foodData, setFoodData}){

    return <div className={style.header}>
        <div>
            <h1>🍲Food-Recipe.com</h1>
            <Input foodData={foodData} setFoodData={setFoodData} />
            
        </div>
    </div>
}
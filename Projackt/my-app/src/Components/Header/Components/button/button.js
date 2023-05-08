
import style from '../../Components/button/button.module.css'


export const Button = () => {
    return (
        <button className = {style.button}>Корзина
        <div className = {style.button__border}></div>
        <div className ={style.button__counter}></div>
        </button>
    )
}
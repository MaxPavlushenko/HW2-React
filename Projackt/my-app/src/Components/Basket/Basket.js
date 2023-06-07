import style from '../Basket/Basket.module.css'
import { Link } from 'react-router-dom'



export const Basket = () => {
    return (
        <div className={style.container}>


            <div className={style.basket}>
                <Link to='/' className={style.basketReturn}> &lt;	к выбору блюда</Link>

                <span className={style.basketCategory}>КОРЗИНА</span>
            </div >
            <div className={style.basketOrder}>
                <Link to='/checkout' button className={style.buttonBasket}>Оформить заказ</Link>
            </div>
    
        </div>
    )
}
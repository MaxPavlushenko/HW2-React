import { useState } from "react"
import style from '../cartCount/cartCount.module.css'
import cart from '../../../assets/images/main/cart.svg';




export const CartCount = ({menuCardsPrice}) => {
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(menuCardsPrice)
    const [isShowCount, setIsShowCount] = useState(false)

    const pencilCountAdd = () => {
        setCount(count + 1)
        setPrice(price + menuCardsPrice)
    }

    const pencilCountSub = () => {
        if (count === 1) {
            setIsShowCount(!isShowCount)
        } else {
            setCount(count - 1)
            setPrice(price - menuCardsPrice)
        }
    }

    function pencilCartClick() {
        setIsShowCount(!isShowCount)
    }

    if (isShowCount) {
        return (

            <>
                <span className={style.showcase}>{count}</span>
                <button className={style.buttonCount} onClick={pencilCountSub}>
                    -
                </button>
                < span className={style.price}>{menuCardsPrice} &#x20bd;</span>
                <button className={style.buttonCount} onClick={pencilCountAdd}>
                    +
                </button>


            </>


        )
    }
    return (
        <>
            <span className={style.price}>{menuCardsPrice} &#x20bd;</span>
            <button className={style.buttonAddCart} onClick={pencilCartClick}>В корзину
                <img src ={cart}></img>
            </button>

        </>
    )

}

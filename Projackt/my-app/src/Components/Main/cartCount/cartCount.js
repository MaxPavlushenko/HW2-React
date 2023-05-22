import { useState } from "react"
import style from '../cartCount/cartCount.module.css'
import cart from '../../../assets/images/main/cart.svg';




export const CartCount = ({ menuCardsPrice }) => {

    const [state, setState] = useState(1)

    const [price, setPrice] = useState(menuCardsPrice)

    const [isShowCount, setIsShowCount] = useState(false)

    const pencilCountAdd = () => {
        setState(state + 1)
        setPrice(price + menuCardsPrice)
    }

    const pencilCountSub = () => {

        if (state === 1) {
            setIsShowCount(!isShowCount)

        } else {
            setState(state - 1)
            setPrice(price - menuCardsPrice)
        }
    }

    function pencilCartClick() {
        setIsShowCount(!isShowCount)
    }

    if (!isShowCount) {


        return (
            <>
                <span className={style.price}>{price} &#x20bd;</span>
                <button className={style.buttonAddCart} onClick={pencilCartClick}>В корзину
                    <img src={cart} alt="cart"></img>
                </button>

            </>
        )
    }
    return (
        <>
            <span className={style.showcase}>{state}</span>
            <button className={style.buttonCount} onClick={pencilCountSub}>
                -
            </button>
            < span className={style.price}>{price} &#x20bd;</span>
            <button className={style.buttonCount} onClick={pencilCountAdd}>
                +
            </button>


        </>


    )
}




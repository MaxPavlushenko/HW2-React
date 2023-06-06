import { useState } from 'react'
import style from '../Burger/burger.module.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


export const Burger = () => {
    const [nav, setNav] = useState(false)
    return (

        <div className={style.container}>
            <ul className={nav ? [style.menu, style.active].join(' '):[style.menu]}>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/delivery'>Delivery</a>
                </li>
                <li>
                    <a href='/sale'>Sale</a>
                </li>
            </ul>
            <div onClick={() => setNav(!nav)} className={style.mobile__bnt}>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
                MENU
            </div>
        </div>
    )
}
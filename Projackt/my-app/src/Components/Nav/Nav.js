

import style from '../../Components/Nav/Nav.module.css'
import {Link} from "react-router-dom"




export const Nav = () => {
    return (
        <nav className={style.nav}>
            <Link to ='/'>Холодные закуски</Link>
            <Link to = '/GorachieZakyski'>Горячие закуски</Link>
            <Link to ='/MaisnieBluda'>Мясные блюда</Link>
            <Link to ='/Sypi'>Супы</Link>
            <Link to ='/RibnieBluda'>Рыбные блюда</Link>
            <Link to ='/GrilMenu'>Гриль меню</Link>
            <Link to ='/FirmennoeMenu'>Фирменные блюда</Link>
            <Link to ='/Napitki'>Напитки</Link>
        </nav>
    )
}
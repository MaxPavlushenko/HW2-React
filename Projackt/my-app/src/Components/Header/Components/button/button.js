
import { Link } from 'react-router-dom'
import style from '../../Components/button/button.module.css'


export const Button = () => {
    return (
        <Link to='/basket' state='true' className={style.button}>Корзина
            <div className={style.button__border}></div>
            <div className={style.button__counter}></div>
        </Link>
    )
}
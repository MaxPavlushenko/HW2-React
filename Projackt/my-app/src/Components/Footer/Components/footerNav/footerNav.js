
import style from '../footerNav/footerNav.module.css'
import { Link } from 'react-router-dom'
import {menuFooter} from '../../../../data/menuFooter'



export const FooterNav = () => {
    return (
        <nav className={style.footerNav}>

{
                menuFooter.map(item => <Link key={item.id} className={style.href} to={item.url}>{item.title}</Link>)
            }



        </nav>
    )
}
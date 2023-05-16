

import style from '../../Components/Nav/Nav.module.css'
import { Link } from "react-router-dom"
import { menu } from '../../data/menu'



export const Nav = () => {
    return (
        <nav className={style.nav}>

            {
                menu.map(itemNav => <Link key={itemNav.id} className={style.href} to={itemNav.url}>{itemNav.title}</Link>)
            }



        </nav>
    )
}
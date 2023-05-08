import style from '../../Components/Header/Header.module.css'
import { Button } from './Components/button/button'
import { Contacts } from './Components/contacts/contacts'
import { Logo } from './Components/logo/logo'
import { Phone } from './Components/phone/phone'
import { Search } from './Components/search/search'

export const Header = () => {
    return (
        <div className={style.header}>
            <Logo/>
            <Search/>
            <Phone/>
            <Contacts/>
            <Button/>
            
        </div>
    )
}
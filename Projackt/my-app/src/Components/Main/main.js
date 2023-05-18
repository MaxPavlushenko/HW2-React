
import { Route, Routes } from 'react-router-dom';
import style from '../Main/main.module.css'
import { Nav } from '../Nav/Nav'
import { Card } from '../Card/card';
import { Basket } from '../Basket/Basket';
import { About } from '../../pages/about/about';
import { Delivery } from '../../pages/delivery/delivery';
import { Sale } from '../../pages/sale/sale';











export const Main = () => {
    return (
        <div className={style.main}>
            <Nav />
            <Routes>
                <Route path='/' element={<Card />} />
                <Route path='/:url' element={<Card />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/about' element ={<About/>}/>
                <Route path='/delivery' element={<Delivery/>}/>
                <Route path='/sale' element={<Sale/>}/>
            </Routes>

            

        </div>
    )
}
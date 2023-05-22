import { useParams } from 'react-router-dom'
import style from './card.module.css'
import { menu } from '../../data/menu'
import { menuCards } from '../../data/menuCards'
import { CartCount } from '../Main/cartCount/cartCount'



export const Card = () => {
    const { url } = useParams()

    const { title } = menu.find(item => {
        if (url === undefined) {
            return item.url === 'HolodnieZacyski'
        }

        return item.url === url
    })





    return (
        <div className={style.card}>
            <h2 className={style.card__title}>{title}</h2>

            <div className={style.cards}>
                {menuCards.map((menuCards) => (
                    <div key={menuCards.id} className={style.card__element}>
                        <div className={style.card__container}>
                            <img className={style.card__img}
                                src={menuCards.images.src}
                                alt={menuCards.images.alt}></img>
                            <div className={style.titleCard}>
                                <h3 className={style.card__elem}>{menuCards.title}</h3>
                                <span className={style.card__weight}>
                                    Вес : {menuCards.weight} г
                                </span>
                                <p className={style.card__text}>
                                    {menuCards.text}
                                </p>
                                <div className={style.card__box}>
                                    <CartCount menuCardsPrice={menuCards.price} />
                                </div>
                            </div>
                        </div>
                        <div className={style.card__container}>
                            <img className={style.card__img}
                                src={menuCards.images.src}
                                alt={menuCards.images.alt}></img>
                            <div className={style.titleCard}>
                                <h3 className={style.card__elem}>{menuCards.title}</h3>
                                <span className={style.card__weight}>
                                    Вес : {menuCards.weight} г
                                </span>
                                <p className={style.card__text}>
                                    {menuCards.text}
                                </p>
                                <div className={style.card__box}>
                                    <CartCount menuCardsPrice={menuCards.price} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}
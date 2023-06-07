import style from "../checkout/checkout.module.css"
import { Link } from "react-router-dom"
import clock from "../../assets/images/Form/clock.png"



export const Checkout = () => {
    return (
        <div className={style.container}>
            <div className={style.checkout}>
                <Link to='/basket' className={style.checkoutReturn}> &lt;	в корзину</Link>

                <span className={style.basketCat}>ОФОРМЛЕНИЕ ЗАКАЗА</span>
            </div >

            <form className={style.contacts}>
                <div className={style.contactsName}>1.Контактная информация</div>
                <div className={style.namePhone}>
                    <input className={style.name} placeholder="Имя*"></input>
                    <input className={style.phone} placeholder="Телефон*"></input>
                </div>
            </form>
            <form className={style.delivery}>
                <div className={style.title}>2.Доставка</div>
                <div className={style.deliveryChoice}>
                    <input className={style.deliveryD} placeholder="Доставка"></input>
                    <input className={style.deliveryPickup} placeholder="Самовывоз"></input>
                    <img className={style.clock} src={clock} alt="clock" ></img>
                    <div className={style.time}>Доставим через  1 час 30 минут</div>
                </div>
                <div className={style.address}>Адрес доставки</div>
                <div className={style.deliveryStreet}>
                    <input className={style.street} placeholder ="Укажите улицу*"></input>
                    <input className={style.houseNumber} placeholder="Номер дома*"></input>
                </div>
                <div className={style.home}>
                    <input className={style.office} placeholder="№ квартиры/офиса"></input>
                    <input className={style.podbezd} placeholder="Подьезд"></input>
                    <input className={style.number} placeholder="Номер дома"></input>
                </div>
                <div className={style.comment}>
                    <input className={style.commentText} placeholder ="Комментарий"></input>
                </div>
            </form>
            <form className={style.pay}>
                <div className={style.payCash}>3. Оплатить</div>
                <div className={style.paymentСhoice}>
                    <input className={style.paymentOnline} placeholder="Онлайн оплата"></input>
                    <input className={style.card} placeholder="Курьеру картой"></input>
                    <input className={style.cash} placeholder="Наличными"></input>
                </div>
                <div className={style.change}>
                    <input className={style.changeAs} placeholder="Сдача с"></input>
                </div>
            </form>
            <form className={style.whenDeliver}>
                <div className={style.deliveryTime}>4.Когда доставить</div>
                <div className={style.when}>
                    <input className={style.nearFuture} placeholder="В ближайшее время"></input>
                    <input className={style.inTime} placeholder="Ко времени"></input>
                    <input className={style.specify} placeholder="Укажите время"></input>
                </div>
                <div className={style.quantity}>
                    <input className={style.numberPersons} placeholder="Кол-во персон  -  1  +"></input>
                </div>

            </form>

        </div>
    )
}
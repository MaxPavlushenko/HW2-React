import style from '../companyInfo/companyInfo.module.css'


export const CompanyInfo = () => {
    return (
        <div className={style.companyInfo}>
            <div className={style.companyInfo__logo}></div>
            <p>© ООО СК «АПШЕРОН»
                Все права защищены. 2010-2020</p>
            <p>Пользовательское соглашение</p>
            <p> Карта сайта</p>
            <p>Политика конфиденциальности</p>
        </div>

    )
}
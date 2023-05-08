
import style from '../../Components/contacts/contacts.module.css'


export const Contacts = () => {
    return (
        <div className = {style.contacts}>
            <div className = {style.contacts__title}>Контакты</div>
            <div className = {style.contacts__phone}>+7(917)510-57-59</div>
        </div>
    )
}
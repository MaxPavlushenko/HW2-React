

import style from '../../Components/Footer/footer.module.css'
import { CompanyInfo } from './Components/companyInfo/companyInfo'
import { FooterNav } from './Components/footerNav/footerNav'





export const Footer = () => {
    return (
        <div className={style.footer}>
            <CompanyInfo />
            <FooterNav />
    
        </div>
    )
}
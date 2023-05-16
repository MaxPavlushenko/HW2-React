


import { Banner } from '../Components/Banner/Banner';
import { Header } from '../Components/Header/Header';
import './App.css';
import { Main } from '../Components/Main/main';
import { Footer } from '../Components/Footer/footer';
import { useLocation } from 'react-router-dom';


export const App = () => {
  let { state } = useLocation()




  return (
    <div>
      <Header />
      {!state && <Banner />}
      <Main />
      <Footer />

    </div>
  )
}



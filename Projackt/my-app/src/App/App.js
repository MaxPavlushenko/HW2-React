

import { Route, Routes } from 'react-router-dom';
import { Banner } from '../Components/Banner/Banner';
import { Header } from '../Components/Header/Header';
import { Nav } from '../Components/Nav/Nav';
import './App.css';
import { HolodnieZacyski } from '../Components/Nav/components/HolodnieZacyski';
import { GorachieZakyski } from '../Components/Nav/components/GorachieZakyski';
import { MaisnieBluda } from '../Components/Nav/components/MaisnieBluda';
import { Sypi } from '../Components/Nav/components/Sypi';
import { RibnieBluda } from '../Components/Nav/components/RibnieBluda';
import { GrilMenu } from '../Components/Nav/components/GrilMenu';
import { FirmennoeMenu } from '../Components/Nav/components/FirmennoeMenu';
import { Napitki } from '../Components/Nav/components/Napitki';

export const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Nav />

      <Routes>
        <Route path='/' element={<HolodnieZacyski />} />
        <Route path='/GorachieZakyski' element={<GorachieZakyski />} />
        <Route path='/MaisnieBluda' element={<MaisnieBluda />} />
        <Route path='/Sypi' element={<Sypi />} />
        <Route path='/RibnieBluda' element={<RibnieBluda />} />
        <Route path='/GrilMenu' element={<GrilMenu />} />
        <Route path='/FirmennoeMenu' element={<FirmennoeMenu />} />
        <Route path='/Napitki' element={<Napitki />} />
      </Routes>
    </div>
  )
}



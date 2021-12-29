import React,{useEffect} from 'react'
import {Routes, Route, useLocation } from 'react-router-dom'
import Formations from './components/Formations'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Quisommenous from './components/Quisommenous'
import Epilation from './components/fiches/Epilation'
import SoinVisage from './components/fiches/SoinVisage'
import SoinCorps from './components/fiches/SoinCorps'
import Pedimani from './components/fiches/pedimani'
import Maquillage from './components/fiches/maquillage'
import Onglerie from './components/fiches/onglerie'
import Prestations from './components/Prestations'

function AppRouter() {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo({top:0})
        return () => {
            return;
        }
    }, [pathname])
    return (
        <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/qui-sommes-nous" element={<Quisommenous />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/prestations" element={<Prestations />} />
      <Route path="/formations/epilation" element={<Epilation />} />
      <Route path="/formations/soin-visage" element={<SoinVisage />} />
      <Route path="/formations/soin-corps" element={<SoinCorps />} />
      <Route path="/formations/pedicure-manicure" element={<Pedimani />} />
      <Route path="/formations/maquillage" element={<Maquillage />} />
      <Route path="/formations/onglerie" element={<Onglerie />} />
    </Routes>
        </>
    )
}

export default AppRouter

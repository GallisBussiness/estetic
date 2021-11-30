import React,{useEffect} from 'react'
import {Routes, Route, useLocation } from 'react-router-dom'
// import FormationDetails from './components/FormationDetails'
import Formations from './components/Formations'
import Home from './components/Home'
import Services from './components/Services'
// import ServiceDetails from './components/FormationDetails'
import Contact from './components/Contact'

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
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/formations/:id" element={<FormationDetails />} />
      <Route path="/services/:id" element={<ServiceDetails />} /> */}
    </Routes>
        </>
    )
}

export default AppRouter

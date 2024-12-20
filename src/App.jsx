import React from 'react'
import Header from './components/pages/Header'
import Slider from './components/pages/Slider'
import GitaPackage from './components/pages/GitaPackage'
import Footer from "./components/pages/Footer"
import Choose from './components/pages/Choose'
const App = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <GitaPackage/>
    <Choose/>
    <Footer/>
    </>
  )
}

export default App
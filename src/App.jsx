import React from 'react'
import Header from './components/pages/Header'
import Footer from "./components/pages/Footer"
import About from './components/pages/Pages/About/About'
import Home from './components/pages/Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GitaMohtsav from './components/pages/GitaMohtsav'
const App = () => {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gita-mohtsav" element={ <GitaMohtsav/> }/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
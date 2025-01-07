import React from 'react'
import Api from './components/Navbar'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Courses from './routes/courses'
import Link from './routes/link'
import './App.css'
import Html from './routes/html'
import Style from './routes/style'
import Js from './routes/js'
import RReact from './routes/rreact'
function App() {
  return (
    <div className='main-img'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Courses />} />
        <Route path='Courses' element={<Link />} />
        <Route path='link' element={<Link />} />
        <Route path='html' element={<Html />} />
        <Route path='style' element={<Style />} />
        <Route path='javaScript' element={<Js />} />
        <Route path='react' element={<RReact />} />
        

      </Routes>

    </div>
  )
}

export default App
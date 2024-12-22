import React from 'react'
import Api from './components/Navbar'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Courses from './routes/courses'
import Link from './routes/link'
function App() {
  return (
    <div>
      <Navbar/>
        
      <Routes>
        <Route path='/' element={<Courses/>} />
        <Route path='link' element={<Link/>}/>
      </Routes>

    </div>
  )
}

export default App
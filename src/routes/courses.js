import React from 'react'
import mix from '.././assets/mix.webp'
import './course.css'
import { Link } from 'react-router-dom'
function Courses() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <h1>Frontend Bo'yicha <br /> Darsliklar</h1>
          <p>Biz bilan Html, Style, JavaScript, React.js O'rganing</p>
          <button><Link className='btn-text' to={'link'}>Bo'shladik</Link></button>
        </div>
        <div className="card-img">
          <img src={mix} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Courses
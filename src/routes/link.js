import React from 'react'
import './link.css'
import Data from '../static/data'
function Link() {
  return (
    <div>
      <div className="Data">
        {
          Data.map((item) => (
            <div className="cards-data">
              <img src={item.img} alt="" />
              <h1>{item.language}</h1>
              <p>{item.text}</p>
              <button>{item.start}</button>
            </div>

          ))
        }

      </div>
    </div>
  )
}

export default Link
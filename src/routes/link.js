import React from 'react';
import './link.css';
import Data from '../static/data';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <div>
      <div className="Data">
        {Data.map((item, index) => (
          <div className="cards-data" key={index}>
            <img className='images-link' src={item.img} alt={item.language} />
            <h1>{item.language}</h1>
            <p>{item.text}</p>
            <Link to={item.path}>
              <button>{item.start}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;

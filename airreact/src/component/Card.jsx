import React from 'react';
import image7 from '../imagesTwo/atlet.jpg';

export default function Card () {
    return (
        <section className="card-container">
           <img className="card-img" src={image7} alt="atlet"/> 
           <div className="card-stats">
           <span>&#9733;</span>
            <span className='gray'>(5)</span>
            <span className='gray'>Sweden</span>
            </div>

            <p>Life lessons with Mary Pierce</p>
            <p><b>From $150</b> / person</p>
       

        </section>
    )
}
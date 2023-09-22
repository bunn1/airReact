import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from './component/Card';
import Contact from './component/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card />
    <Contact 
      img="../images/litenkatt.jpg"
      name="Mr Whiskersson"
      phone="555-555-5555"
      mail="whiskas@catnap.meow"
    /> <Contact 
    img="../images/litenkatt.jpg"
    name="Mr Nilsson"
    phone="666-666-6666"
    mail="junk@gmail.com"
  />
 <Contact 
      img="../images/litenkatt.jpg"
      name="Mr Andersson"
      phone="777-777-777"
      mail="hoppsan@gmail.com"
    />
 <Contact 
      img="../images/litenkatt.jpg"
      name="Mr Pettersson"
      phone="888-888-8888"
      mail="hoho@gmail.com"
    />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


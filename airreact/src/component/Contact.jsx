import React from 'react';
// import cat from '../images/cat.jpg';
// import phone from '../images/phone-icon.png';
// import mail from '../images/mail-icon.png';

function Contact (props) {

  const {img, name, phone, mail} = props;
  
    return (
    
    
        <div className="contact-card">
        <img src={img} alt="cat" />
        <h3>{name}</h3>
        <div className="info-group">
          <img className="phone-icon" src={phone} alt="phone" />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img className="mail-icon" src={mail} alt="mail" />
          <p>{mail}</p>
        </div>
      </div>
    )

}

export default Contact;
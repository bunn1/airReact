import React from 'react';

function Contact (props) {

  // const {img, name, phone, mail} = props;
  
    return (
    
    
        <div className="contact-card">
        <img src={props.img} alt="cat" />
        <h3>{props.name}</h3>
        <div className="info-group">
          <img className="phone-icon" src={props.phoneImg} alt="phone" width="15px" height="15px"/>
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <img className="mail-icon" src={props.mailIcons} alt="mail" />
          <p>{props.mail}</p>

        </div>
      </div>
    )

}
export default Contact;
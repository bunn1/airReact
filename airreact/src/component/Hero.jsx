import React from 'react';
import image1 from '../imgGallery/bollar.jpg'
import image2 from '../imgGallery/sportAction.jpg'
import image3 from '../imgGallery/sportArt.jpg'
import image4 from '../imgGallery/fotboll.jpg'
import image5 from '../imgGallery/tennis.jpg'
import image6 from '../imgGallery/gymnastik.jpg'

function Hero() {
  const galleryImages = [image1, image2, image3, image4, image5, image6];

  return (
    <section className="hero-section">
      <div className="img-gallery">
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt={`${index + 1}`} />
        ))}
      </div>
        
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts all without leaving home.</p>
    </section>

  );
}

export default Hero;

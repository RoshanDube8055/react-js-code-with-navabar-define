import React, { useState, useEffect } from 'react';
import Jungle from './jungle2.jpg';
import Tiger2 from './tiger2.jpg';
import Dear from './dear.jpg';

const images = [
  Dear,
  Jungle,
  Tiger2,
];

const Change = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to change the background image
    const changeBackgroundImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set interval to change the background image every 5 seconds
    const intervalId = setInterval(changeBackgroundImage, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <div style={{
        display: 'flex',
        height: '100%',
        width: `${images.length * 100}%`,
        transform: `translateX(-${currentImageIndex * 100 / images.length}%)`,
        transition: 'transform 1s ease-in-out',
      }}>
        {images.map((image, index) => (
          <div key={index} style={{
            height: '100%',
            width: `${100 / images.length}%`,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Change;

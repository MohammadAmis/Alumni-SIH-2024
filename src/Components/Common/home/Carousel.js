import React, { useState, useEffect } from 'react';
import './Carousel.css';
import image1 from "../../../Assets/saboo image 1.jpg";
import image2 from "../../../Assets/saboo image 2.jpg";
import image3 from "../../../Assets/saboo image 3.jpg";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 3);
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="relative mx-0 pt-2 border-gray-500 shadow" style={{ height: '600px' }}>
      <div className="carousel w-full overflow-hidden" style={{ height: '100%' }}>
        <div className="carousel-inner relative w-full" style={{ height: '100%' }}>
          <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`} style={{ height: '100%' }}>
            <img src={image1} alt="Slide 1" className="w-full object-cover" style={{ height: '600px', objectFit: 'cover' }} />
          </div>
          <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`} style={{ height: '100%' }}>
            <img src={image2} alt="Slide 2" className="w-full object-cover" style={{ height: '600px', objectFit: 'cover' }} />
          </div>
          <div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`} style={{ height: '100%' }}>
            <img src={image3} alt="Slide 3" className="w-full object-cover" style={{ height: '600px', objectFit: 'cover' }} />
          </div>
        </div>
        <button className="carousel-control-prev absolute top-1/2 left-0 z-10 p-4 text-3xl text-white transform -translate-y-1/2" onClick={handlePrevClick}>
          &lsaquo;
        </button>
        <button className="carousel-control-next absolute top-1/2 right-0 z-10 p-4 text-3xl text-white transform -translate-y-1/2" onClick={handleNextClick}>
          &rsaquo;
        </button>
      </div>
    </div>
  );
}

export default Carousel;

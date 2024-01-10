import React, { memo, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './CarouselComponent.css';

const CarouselComponent = memo(function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preload" as="image" href="/slide1.webp" />
      </Helmet>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="/slide1.webp"
            alt="First slide"
            width="1920"
            height="1080"
            style={{ visibility: index === 0 ? 'visible' : 'hidden' }}
          />
          <Carousel.Caption>
            {/* Image du slide 1 */}
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src={require("./assets/imagesEtLogo/images/slide2.webp")}
            alt="Second slide"
            width="1920"
            height="1080"
            style={{ visibility: index === 1 ? 'visible' : 'hidden' }}
          />
          <Carousel.Caption>
            {/* Image du slide 2 */}
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src={require("./assets/imagesEtLogo/images/slide3.webp")}
            alt="Third slide"
            width="1920"
            height="1080"
            style={{ visibility: index === 2 ? 'visible' : 'hidden' }}
          />
          <Carousel.Caption>
            {/* Image du slide 3 */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </HelmetProvider>
  );
});

export default CarouselComponent;
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import photo5 from '../../images/photo5.png';
import photo7 from '../../images/photo7.png';
import photo3 from '../../images/photo3.png';
import photo2 from '../../images/photo2.png';
import sofa from '../../images/sofa.png';


const Slider = () => {
    // Set up state to keep track of the current slide index
    const [index, setIndex] = useState(0);

    // Function to handle slide selection
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>

<Carousel.Item className="slider-background0" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
              <img
                  style={{ height: "350px", width: "450.53px" }}
                  className=""
                  src={sofa}
                  alt="First slide"
              />
              <div className="">
              <h3 className="slider-title"> From Essentials to Exclusives – Find It All Here</h3>
              <p className="slider-text">More Than 40% </p>
              </div>
          </div>
      </Carousel.Item>



      <Carousel.Item className="slider-background" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
              <img
                  style={{ height: "350px", width: "313.53px" }}
                  className=""
                  src={photo3}
                  alt="First slide"
              />
              <div className="">
                  <h3 className="slider-title"> Effortless Shopping, Endless Style </h3>
                  <p className="slider-text"> Comming Soon ! </p>
              </div>
          </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background2" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
              <img
                  style={{ height: "350px", width: "313.53px" }}
                  className=""
                  src={photo2}
                  alt="First slide"
              />
              <div className="">
                  <h3 className="slider-title">Discover Our Latest Collection – Made for You</h3>
                  <p className="slider-text">60% </p>
              </div>
          </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background3" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
              <img
                  style={{ height: "350px", width: "450.53px" }}
                  className=""
                  src={photo7}
                  alt="First slide"
              />
              <div className="">
              <h3 className="slider-title"> Shop Sustainably, Style Responsibly</h3>
              <p className="slider-text">All 20% </p>
              </div>
          </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background4" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
              <img
                  style={{ height: "350px", width: "373.53px" }}
                  className=""
                  src={photo5}
                  alt="First slide"
              />
              <div className="">
              <h3 className="slider-title"> From Essentials to Exclusives – Find It All Here</h3>
              <p className="slider-text">More Than 40% </p>
              </div>
          </div>
      </Carousel.Item>
  </Carousel>
    );
}

export default Slider;

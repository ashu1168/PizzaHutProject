import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
function Customers() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <FaChevronCircleLeft />,
    nextArrow: <FaChevronCircleRight />,
  };
  return (
    <div>
      <h1 style={{ fontFamily: 'brush script mt' }}>What Says Our Customers</h1>
      <div className="slider-container">
        {/* ref={slider => {
          sliderRef = slider;
        }}; */}
        <Slider ref={slider => {
          sliderRef = slider;
        }}{...settings}>
          <div className='p-4'>
            <div className='bg-dark text-white p-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam minus veritatis
                cumque exercitationem ut voluptatibus praesentium.
                Possimus in quis tempora asperiores at fugiat! Error in quibusdam veritatis nulla est.
              </p>
              <h5>Mona Michell</h5>
              <p>Magna Aliqua</p>
            </div>
            <img src="./images/client1.jpg" alt="" className='img-fluid mx-auto d-block rounded-circle  border-4 border-warning-4 h-25 w-25 g-4 float-start' />
          </div>
          <div className='p-4'>
            <div className='bg-dark text-white p-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam minus veritatis
                cumque exercitationem ut voluptatibus praesentium.
                Possimus in quis tempora asperiores at fugiat! Error in quibusdam veritatis nulla est.
              </p>
              <h5>Mona Michell</h5>
              <p>Magna Aliqua</p>
            </div>
            <img src="./images/client2.jpg" alt="" className='img-fluid mx-auto d-block rounded-circle  border-4 border-warning-4 w-25 h-25 float-start' />
          </div>
          <div className='p-4'>
            <div className='bg-dark text-white p-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam minus veritatis
                cumque exercitationem ut voluptatibus praesentium.
                Possimus in quis tempora asperiores at fugiat! Error in quibusdam veritatis nulla est.
              </p>
              <h5>Mona Michell</h5>
              <p>Magna Aliqua</p>
            </div>
            <img src="./images/client1.jpg" alt="" className='img-fluid mx-auto d-block rounded-circle  border-4 border-warning-4 h-25 w-25 float-start' />
          </div>
          <div className='p-4'>
            <div className='bg-dark text-white p-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam minus veritatis
                cumque exercitationem ut voluptatibus praesentium.
                Possimus in quis tempora asperiores at fugiat! Error in quibusdam veritatis nulla est.
              </p>
              <h5>Mona Michell</h5>
              <p>Magna Aliqua</p>
            </div>
            <img src="./images/client2.jpg" alt="" className='img-fluid mx-auto d-block rounded-circle  border-4 border-warning-4 h-25 w-25 float-start' />
          </div>
        </Slider>
        <FaChevronCircleLeft className='text-warning fs-1 me-2' onClick={previous} />
        <FaChevronCircleRight className='text-warning fs-1 ' onClick={next} />
      </div>
    </div>
  )
}

export default Customers

import React, { useRef } from 'react';
import Slider from 'react-slick';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slidercard from '../Cards/SliderCard/SliderCard';
import SlidercardTwo from '../Cards/SliderCard/SliderCradTwo';
import SlidercardThree from '../Cards/SliderCard/SliderCardThree';


const CarouselWithButtons = () => {
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='home_carousel container2'>
      <Slider ref={sliderRef} {...settings}>
          <div className="slider__card">
            <Slidercard/>
          </div>
          <div className="slider__card">
            <SlidercardTwo/>
          </div>
          <div className="slider__card">
            <SlidercardThree/>
          </div>
      </Slider>
      <div className='arrow_buttons'>
        <div className="back_button">
        <IconButton className='icon_button' onClick={goToPrev} variant="contained">
          <ArrowBackIosNewIcon/>
        </IconButton>
        </div>
        <div className="next_button">
        <IconButton className='icon_button2' onClick={goToNext} variant="contained">
          <ArrowForwardIosIcon/>
        </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithButtons;

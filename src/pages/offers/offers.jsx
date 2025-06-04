import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './offersIcon.css';

import newImage from '../../assets/new.png';
import image2 from '../../assets/phone.png';
import image3 from '../../assets/repair.png';
import image4 from '../../assets/speaker.png';
import image5 from '../../assets/basket2.png';

const Offers = () => {
  const sliderRef = useRef(null);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  adaptiveHeight: true,
};

  return (
    <Container sx={{ mt: '50px' }}>
      {/* Заголовок + стрелки */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h3">Предложения</Typography>
        <Box>
          <IconButton onClick={() => sliderRef.current.slickPrev()}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => sliderRef.current.slickNext()}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Слайдер с изображениями */}
      <Box sx={{ mt: 3 }}>
        <Slider className="custom-slider" ref={sliderRef} {...settings}>
        <div><img className="icon1" src={newImage} alt="Предложение 1" /></div>
        <div><img className="icon1" src={image2} alt="Предложение 2" /></div>
        <div><img className="icon1" src={image3} alt="Предложение 3" /></div>
        <div><img className="icon1" src={image4} alt="Предложение 4" /></div>
        <div><img className="icon1" src={image5} alt="Предложение 5" /></div>
        </Slider>

      </Box>
    </Container>
  );
};

export default Offers;

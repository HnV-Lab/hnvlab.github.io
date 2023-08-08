import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Logo from '../components/Logo';
import Paperlist from '../components/Paperlist';

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Welcome to</h2>
      <h1>Human and Vision Lab</h1>
      <Slider {...settings}>
        <div>
          <img src="img/1.jpg" alt="Image 1" style={{ display: 'block', margin: '0 auto' }} width="600" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="img/2.jpg" alt="Image 2" style={{ display: 'block', margin: '0 auto' }} width="600" />
        </div>
        <div>
          <img src="img/cat.jpg" alt="Image 3" style={{ display: 'block', margin: '0 auto', width: '10%', height: 'auto' }} />
        </div>
      </Slider>

      {<Logo />}
      {<Paperlist />}
    </div>
  );
};

export default Home;

import React from 'react';
import s from './playZone.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PlayZone = () => (
  <>
    <div className={s.wrapper}>
      <div className={s.carouselContainer}>
        <Carousel showArrows={true}>
          <div>
            <img src="assets/play/1.png" alt="foto complex" />
          </div>
          <div>
            <img src="assets/play/2.png" alt="foto complex" />
          </div>
          <div>
            <img src="assets/play/3.png" alt="foto complex" />
          </div>
          <div>
            <img src="assets/play/4.png" alt="foto complex" />
          </div>
          <div>
            <img src="assets/play/5.png" alt="foto complex" />
          </div>
          <div>
            <img src="assets/play/6.png" alt="foto complex" />
          </div>
        </Carousel>
      </div>
    </div>
  </>
);

export default PlayZone;

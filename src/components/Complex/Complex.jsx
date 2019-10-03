import React, { Component } from 'react';
import styles from './complex.module.css';
// import PlayZone from '../PlayZone/PlayZone';
import { Link } from 'react-router-dom';

class Complex extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={styles.fotoWrapperAll}>
          <h2 className={styles.title}>Хочешь увидеть наши фото?</h2>
          <div className={styles.fotoContainer}>
            <div className={styles.fotoWrapper}>
              <p className={styles.fotoDesc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dolore necessitatibus cum delectus
                veniam placeat quo architecto repudiandae quas amet?
              </p>
              <div className={styles.foto}>Фото</div>
            </div>
            <div className={styles.imgWrapper}>
              <img src="/assets/monstr2.png" alt="monstr"></img>
            </div>
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <h2 className={styles.title}>Наши цены</h2>
          <div className={styles.priceContainer}>
            <div className={styles.imgPriceWrapper}>
              <img src="/assets/monstr3.png" alt="monstr"></img>
            </div>
            <div className={styles.menuBtns}>
              <Link to="/restoraunt" className={`${styles.menuBtn} ${styles.menuRest}`}>
                Ресторан
              </Link>
              <Link to="/play" className={`${styles.menuBtn} ${styles.menuPlay}`}>
                Игровая зона
              </Link>
              <Link to="/showroom" className={`${styles.menuBtn} ${styles.menuShow}`}>
                Шоурум
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Complex;

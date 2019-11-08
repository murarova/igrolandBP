import React from 'react';
import styles from './Prices.module.css';
import { Link } from 'react-router-dom';
import cake from '../../assets/Cake.png';

const Prices = () => (
  <div className={styles.wrapper}>
    <div className={styles.containerAll}>
      <h2 className={styles.title}>Дивитися ціни.</h2>
      <div className={styles.container}>
        <div className={styles.menuBtns}>
          <Link to="/showroom" className={`${styles.menuBtn} ${styles.menuShow}`}>
            Шоурум
          </Link>
          <Link to="/restaurant" className={`${styles.menuBtn} ${styles.menuRest}`}>
            Ресторан
          </Link>
          <Link to="/play-zone" className={`${styles.menuBtn} ${styles.menuPlay}`}>
            Игровая зона
          </Link>
        </div>
        <div className={styles.imgWrapper}>
          <img src={cake} alt="cake"></img>
        </div>
      </div>
    </div>
  </div>
);

export default Prices;

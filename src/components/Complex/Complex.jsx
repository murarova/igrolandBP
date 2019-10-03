import React, { Component } from 'react';
import styles from './complex.module.css';
import PlayZone from '../PlayZone/PlayZone';
import { Link } from 'react-router-dom';

class Complex extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className={styles.title}>Наш комплекс</h2>
        <PlayZone />
        <h2 className={styles.title}>Наши цены</h2>
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
      </>
    );
  }
}

export default Complex;

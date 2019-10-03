import React from 'react';
// import { Link } from 'react-router-dom';
// import windowSize from 'react-window-size';
import styles from './Header.module.css';
// import Icon from '../Icon/Icon';

const Header = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <p className={styles.address}>
        <p>г.Киев</p>
        <p>ТРЦ "Скай Молл"</p>
        <p>пр.Генерала Ватутина 2т</p>
        <p>тел: 067-239-99-16</p>
      </p>
    </header>
  </div>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <p className={styles.address}>
        <span> г.Киев</span>
        <span>ТРЦ "Скай Молл"</span>
        <span>пр.Генерала Ватутина 2т</span>
        <a className={styles.tel} href="tel: +380672399916">
          тел: 067-239-99-16
        </a>
      </p>
    </header>
  </div>
);

export default Header;

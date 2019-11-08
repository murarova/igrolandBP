import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PartyCard.module.css';
import monster from '../../assets/Monster.png';

const PartyCard = () => (
  <>
    <div className={styles.patyCardWrapperAll}>
      <h2 className={styles.title}>Всі ігры безлімітно за 199 грн!</h2>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={monster} alt="monster"></img>
        </div>
        <Link to="/party-card" className={styles.partyCard}>
          <span className={styles.partyCardDescr}>Дізнатися більше про </span>
          <span className={styles.partyCardTitle}>Party Card</span>
        </Link>
      </div>
    </div>
  </>
);

export default PartyCard;

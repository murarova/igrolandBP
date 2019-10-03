import React from 'react';
import styles from './partyCard.module.css';

const PartyCard = () => (
  <div className={styles.patyCardWrapperAll}>
    <h2 className={styles.title}>Лучшее предложение на День Рождения!</h2>
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src="/assets/monstr.png" alt="monstr"></img>
      </div>
      <div className={styles.partyCardWrapper}>
        <h3 className={styles.descTitle}>Все игры безлимитно за 200 грн!</h3>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem libero possimus quasi numquam tempora. Rerum aut
          consequuntur tempora dolor voluptatem illum esse nesciunt, quidem excepturi, molestiae distinctio quibusdam
          deserunt fugiat!
        </p>
        <div className={styles.partyCard}>Party Card</div>
      </div>
    </div>
  </div>
);

export default PartyCard;

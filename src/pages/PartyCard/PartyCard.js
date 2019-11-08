import React from 'react';
import styles from './PartyCard.module.css';
import Header from '../../components/Header/Header';
import info from '../../assets/db/partyCardInfo.json';

const PartyCard = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <h3 className={styles.subTitle}>{info.subTitle}</h3>
      <h2 className={styles.title}>{info.title}</h2>
      <ul className={styles.list}>
        {info.description.map(el => (
          <li className={styles.listItem} key={el.toString()}>
            {el}
          </li>
        ))}
      </ul>

      <h3 className={styles.price}>{info.price}</h3>
    </div>
    <div className={styles.imgWrapper}>
      <img src={require('../../assets/PartyCard.png')} alt="happy children" />
    </div>
  </>
);

export default PartyCard;

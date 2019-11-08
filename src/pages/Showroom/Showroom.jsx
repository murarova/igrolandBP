import React from 'react';
import styles from './Showroom.module.css';
import Header from '../../components/Header/Header';
import showroomPrice from '../../assets/db/showroomPrice.json';

const Showroom = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Прайс-лист Шоурум</h2>

      <ul className={styles.list}>
        {showroomPrice.map(item => (
          <li className={styles.card} key={item.title.toString()}>
            <div className={styles.imgWrapper}>
              <img src={require(`../../assets/img/showroom/${item.img}`)} alt={item.alt} />
            </div>
            <p className={styles.description}>
              <span className={styles.descItem}>
                Назва: <span className={styles.descItemResult}>{item.title}</span>
              </span>
              <span className={styles.descItem}>
                Тривалість: <span className={styles.descItemResult}>{item.duration} хв.</span>
              </span>
              <span className={styles.descItem}>
                Ціна: <span className={styles.descItemResult}>{item.price} грн</span>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Showroom;

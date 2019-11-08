import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Restaurant.module.css';
import Header from '../../components/Header/Header';
import salads from '../../assets/db/restaurant/salads.json';
import burgers from '../../assets/db/restaurant/burgers.json';

const menuGroups = [
  'Салаты',
  'Асорті',
  'Сет-меню',
  'Дитяче меню',
  'Гарячі страви',
  'Бургери',
  'Піца',
  'Десерти',
  'Молочні коктелі',
  'Холодні напої'
];

const Restaurant = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Прайс-лист ресторан</h2>
      <ul className={styles.groupList}>
        {menuGroups.map(el => (
          <Link
            to={`/restaurant#${el}`}
            scroll={el => el.scrollIntoView({ block: 'center', inline: 'nearest' })}
            key={el.toString()}
            className={styles.groupItem}
          >
            {el}
          </Link>
        ))}
      </ul>
      {/* SALADS */}
      <h2 id="Салаты">Салати</h2>
      <div className={styles.groupImgWrapper}>
        <img src={require('../../assets/img/restaurant/salat.jpg')} alt="salad" />
      </div>
      <ul className={styles.list}>
        {salads.map(item => (
          <li className={styles.card} key={item.title.toString()}>
            <p className={styles.description}>
              <span className={styles.descItem}>
                <span className={styles.descItemResult}>{item.title}</span>
              </span>
              <span className={styles.descItem}>
                <span className={styles.descItemResult}>{item.price} грн.</span>
              </span>
            </p>
          </li>
        ))}
      </ul>

      {/* BURGERS */}

      <h2 id="Бургери">Бургери</h2>
      <div className={styles.groupImgWrapper}>
        <img src={require('../../assets/img/restaurant/burgers.jpg')} alt="burgers" />
      </div>
      <ul className={styles.list}>
        {burgers.map(item => (
          <li className={styles.card} key={item.title.toString()}>
            <p className={styles.description}>
              <span className={styles.descItem}>
                <span className={styles.descItemResult}>{item.title}</span>
              </span>
              <span className={styles.descItem}>
                <span className={styles.descItemResult}>{item.price} грн.</span>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Restaurant;

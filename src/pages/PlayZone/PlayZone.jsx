import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './PlayZone.module.css';
import Header from '../../components/Header/Header';
import gamePackages from '../../assets/db/playZone/gamePackages.json';
import attractions from '../../assets/db/playZone/attractions.json';

const menuGroups = ['Пакетні картки', 'Атракціони', 'Автомати'];

const PlayZone = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Прайс-лист Ігрова зона</h2>
      <ul className={styles.groupList}>
        {menuGroups.map(el => (
          <Link
            to={`/play-zone#${el}`}
            scroll={el => el.scrollIntoView({ block: 'center', inline: 'nearest' })}
            key={el.toString()}
            className={styles.groupItem}
          >
            {el}
          </Link>
        ))}
      </ul>

      {/* Пакетні картки */}
      <h2 id="Пакетні картки">Пакетні картки</h2>

      <ul className={styles.list}>
        {gamePackages.map(item => (
          <li className={styles.card} key={item.title.toString()}>
            <div className={styles.imgWrapper}>
              <img src={require('../../assets/img/playZone/megaPlay.png')} alt={item.alt} />
            </div>
            <p className={styles.description}>
              <span className={styles.descItem}>
                Назва: <span className={styles.descItemResult}>{item.title}</span>
              </span>
              <span className={styles.descItem}>
                К-сть ігор: <span className={styles.descItemResult}>{item.quantity}</span>
              </span>
              <span className={styles.descItem}>
                Ціна: <span className={styles.descItemResult}>{item.price} грн</span>
              </span>
              <span className={styles.descItem}>
                Ціна за 1 гру: <span className={styles.descItemResult}>{item.perGame} грн</span>
              </span>
            </p>
          </li>
        ))}
      </ul>

      <h2 id="Атракціони">Атракціони</h2>

      <ul className={styles.list}>
        {attractions.map(item => (
          <li className={styles.card} key={item.title.toString()}>
            <div className={styles.imgWrapper}>
              <img src={require(`../../assets/img/playZone/${item.img}`)} alt={item.title} />
            </div>
            <p className={styles.description}>
              <span className={styles.descItem}>
                Назва: <span className={styles.descItemResult}>{item.title}</span>
              </span>
              <span className={styles.descItem}>
                Тариф: <span className={styles.descItemResult}>{item.rate}</span>
              </span>
              <span className={styles.descItem}>
                Ціна: <span className={styles.descItemResult}>{item.price} грн</span>
              </span>
              <span className={styles.descItem}>
                Ціна з Mega Play XL: <span className={styles.descItemResult}>{item.package} грн</span>
              </span>
            </p>
          </li>
        ))}
      </ul>

      {/* <ul className={styles.list}>
        {gamePackages.map(item => (
          <li className={styles.card} key={item.title.toString()}>
            <p className={styles.description}>
              <span className={styles.descItem}>
                <span className={styles.descItemResult}>Назва: {item.title}</span>
              </span>
              <span className={styles.descItem}>
                <span className={styles.descItemResult}>Кол-во ігор: {item.quantity} грн.</span>
              </span>
              <span className={styles.descItem}>
                <span className={styles.descItemResult}>Ціна: {item.price} грн.</span>
              </span>
              <span className={styles.descItem}>
                <span className={styles.descItemResult}>Ціна за гру: {item.perGame} грн.</span>
              </span>
            </p>
          </li>
        ))}
      </ul> */}

      {/* BURGERS */}

      {/* <h2 id="Бургери">Бургери</h2>
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
      </ul> */}
    </div>
  </>
);

export default PlayZone;

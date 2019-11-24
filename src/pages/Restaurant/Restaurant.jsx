import React from 'react';
import { Link } from 'react-scroll';
import styles from './Restaurant.module.css';
import Header from '../../components/Header/Header';
import ScrollButton from '../../components/ScrollButton/ScrollButton';

import salads from '../../assets/db/restaurant/salads.json';
import burgers from '../../assets/db/restaurant/burgers.json';
import childrenMenu from '../../assets/db/restaurant/childrenMenu.json';
import deserts from '../../assets/db/restaurant/deserts.json';
import drinks from '../../assets/db/restaurant/drinks.json';
import hotDishes from '../../assets/db/restaurant/hotDishes.json';
import milkShakes from '../../assets/db/restaurant/milkShakes.json';
import pizza from '../../assets/db/restaurant/pizza.json';
import services from '../../assets/db/restaurant/services.json';
import sets from '../../assets/db/restaurant/sets.json';

const menuGroups = [
    'Салати',
    'Сет-меню',
    'Дитяче меню',
    'Гарячі страви',
    'Бургери',
    'Піца',
    'Десерти',
    'Молочні коктелі',
    'Напої',
    'Послуги',
];

const Restaurant = () => (
    <>
        <Header />
        <div className={styles.wrapper}>
            <h2 className={styles.sectionTitle}>Прайс-лист ресторан</h2>
            <ul className={styles.groupList}>
                {menuGroups.map(el => (
                    <Link
                        className={styles.groupItem}
                        key={el.toString()}
                        to={el}
                        spy
                        smooth
                        offset={-110}
                        duration={300}
                    >
                        {el}
                    </Link>
                ))}
            </ul>

            {/* SALADS */}

            <h2 id="Салати">Салати</h2>
            <div className={styles.groupImgWrapper}>
                <img
                    src={require('../../assets/img/restaurant/Салати.jpg')}
                    alt="salad"
                />
            </div>
            <ul className={styles.list}>
                {salads.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>

            {/* Сет-меню */}

            <h2 id="Сет-меню">Сет-меню</h2>
            <div className={styles.groupImgWrapper}>
                <img
                    src={require('../../assets/img/restaurant/Сети.jpg')}
                    alt="sets"
                />
            </div>
            <ul className={styles.list}>
                {sets.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>

            {/* Дитяче меню */}

            <h2 id="Дитяче меню">Дитяче меню</h2>
            <div className={styles.groupImgWrapper}>
                <img
                    src={require('../../assets/img/restaurant/дитяче меню.jpg')}
                    alt="Дитяче меню"
                />
            </div>
            <ul className={styles.list}>
                {childrenMenu.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>

            <h2 id="Гарячі страви">Гарячі страви</h2>
            <div className={styles.groupImgWrapper}>
                <img
                    src={require('../../assets/img/restaurant/Гарячі_страви.jpg')}
                    alt="Гарячі страви"
                />
            </div>
            <ul className={styles.list}>
                {hotDishes.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>

            <h2 id="Бургери">Бургери</h2>
            <div className={styles.groupImgWrapper}>
                <img
                    src={require('../../assets/img/restaurant/Бургери.jpg')}
                    alt="Бургери"
                />
            </div>
            <ul className={styles.list}>
                {burgers.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>

            <h2 id="Піца">Піца</h2>
            <div className={styles.groupImgWrapper}>
                <img
                    src={require('../../assets/img/restaurant/Піца.jpg')}
                    alt="Піца"
                />
            </div>
            <ul className={styles.list}>
                {pizza.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>

            <h2 id="Десерти">Десерти</h2>
            <div className={styles.groupImgWrapper}>
                <img
                    src={require('../../assets/img/restaurant/десерти.jpg')}
                    alt="Десерти"
                />
            </div>
            <ul className={styles.list}>
                {deserts.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>

            <h2 id="Молочні коктелі">Молочні коктелі</h2>
            <div className={styles.groupImgWrapper}>
                <img
                    src={require('../../assets/img/restaurant/Молочні коктейлі.jpg')}
                    alt="Молочні коктелі"
                />
            </div>
            <ul className={styles.list}>
                {milkShakes.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>

            <h2 id="Напої">Напої</h2>
            <div className={styles.groupImgWrapper}>
                <img
                    src={require('../../assets/img/restaurant/напої.jpg')}
                    alt="Напої"
                />
            </div>
            <ul className={styles.list}>
                {drinks.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>

            <h2 id="Послуги">Послуги</h2>

            <ul className={styles.list}>
                {services.map(item => (
                    <li className={styles.card} key={item.id}>
                        <p className={styles.description}>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.name}
                                </span>
                            </span>
                            <span className={styles.descItem}>
                                <span className={styles.descItemResult}>
                                    {item.price} грн.
                                </span>
                            </span>
                        </p>
                    </li>
                ))}
            </ul>
            <ScrollButton scrollStepInPx="40" delayInMs="10" />
        </div>
    </>
);

export default Restaurant;

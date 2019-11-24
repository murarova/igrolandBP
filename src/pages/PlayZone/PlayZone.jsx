import React, { Component } from 'react';
import { Link } from 'react-scroll';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import styles from './PlayZone.module.css';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import ScrollButton from '../../components/ScrollButton/ScrollButton';

import games from '../../assets/db/playZone/games.json';
import packages from '../../assets/db/playZone/packages.json';
import attractions from '../../assets/db/playZone/attractions.json';

const menuGroups = ['Пакетні картки', 'Атракціони', 'Автомати'];
class PlayZone extends Component {
    state = {
        isModalOpen: false,
        foto: '',
    };

    onClick = img => {
        this.setState({ isModalOpen: true, foto: img });
    };

    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        const { isModalOpen, foto } = this.state;

        return (
            <>
                <Header />
                <div className={styles.wrapper}>
                    <h2 className={styles.sectionTitle}>
                        Прайс-лист Ігрова зона
                    </h2>
                    <ul className={styles.groupList}>
                        {menuGroups.map(el => (
                            <Link
                                key={el.toString()}
                                className={styles.groupItem}
                                to={el}
                                spy
                                smooth
                                offset={-110}
                                duration={500}
                            >
                                {el}
                            </Link>
                        ))}
                    </ul>

                    {/* Пакетні картки */}
                    <h2 id="Пакетні картки">Пакетні картки</h2>

                    <ul className={styles.list}>
                        {packages.map(item => (
                            <li
                                className={styles.card}
                                key={item.title.toString()}
                            >
                                <div className={styles.imgWrapper}>
                                    <img
                                        src={require('../../assets/img/playZone/megaPlay.png')}
                                        alt={item.alt}
                                    />
                                </div>
                                <p className={styles.description}>
                                    <span className={styles.descItem}>
                                        <span className={styles.title}>
                                            {item.title}
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        К-сть ігор:{' '}
                                        <span className={styles.descItemResult}>
                                            {item.quantity}
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        Ціна:{' '}
                                        <span className={styles.descItemResult}>
                                            {item.price} грн
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        Ціна за 1 гру:{' '}
                                        <span className={styles.descItemResult}>
                                            {item.perGame} грн
                                        </span>
                                    </span>
                                </p>
                            </li>
                        ))}
                    </ul>

                    <h2 id="Атракціони">Атракціони</h2>

                    <ul className={styles.list}>
                        {attractions.map(item => (
                            <li
                                className={styles.card}
                                key={Math.random().toString()}
                            >
                                <div
                                    className={styles.imgWrapper}
                                    onClick={() => this.onClick(item.img)}
                                >
                                    <img
                                        src={require(`../../assets/img/complex/${item.img}`)}
                                        alt={item.title}
                                    />
                                    <button
                                        type="button"
                                        className={styles.fullscreenButton}
                                    >
                                        <ZoomInIcon />
                                    </button>
                                </div>
                                <p className={styles.description}>
                                    <span className={styles.descItem}>
                                        <span className={styles.title}>
                                            {item.title}
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        Тариф:{' '}
                                        <span className={styles.descItemResult}>
                                            {item.rate}
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        Ціна будній день :{' '}
                                        <span className={styles.descItemResult}>
                                            {item.price} грн
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        Ціна вихідний день :{' '}
                                        <span className={styles.descItemResult}>
                                            {item.weekEndPrice} грн
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        Пакетнiх iгор буднiй:{' '}
                                        <span className={styles.descItemResult}>
                                            {item.packages}
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        Пакетнiх iгор вихідний:{' '}
                                        <span className={styles.descItemResult}>
                                            {item.weekEndPackages}
                                        </span>
                                    </span>
                                </p>
                            </li>
                        ))}
                    </ul>

                    <h2 id="Автомати">Автомати</h2>

                    <ul className={styles.list}>
                        {games.map(item => (
                            <li
                                className={styles.card}
                                key={item.title.toString()}
                            >
                                <p className={styles.description}>
                                    <span className={styles.descItem}>
                                        <span className={styles.title}>
                                            {item.title}
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        <span className={styles.descItemResult}>
                                            Ціна: {item.price} грн.
                                        </span>
                                    </span>
                                    <span className={styles.descItem}>
                                        <span className={styles.descItemResult}>
                                            Ціна по МегаПлей XL: {item.megaPlay}{' '}
                                            грн.
                                        </span>
                                    </span>
                                </p>
                            </li>
                        ))}
                    </ul>
                    {isModalOpen && (
                        <Modal
                            type="playZone"
                            foto={foto}
                            onClose={this.closeModal}
                        />
                    )}

                    <ScrollButton scrollStepInPx="40" delayInMs="10" />
                </div>
            </>
        );
    }
}

export default PlayZone;

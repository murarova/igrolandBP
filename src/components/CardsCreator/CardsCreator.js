/* eslint-disable global-require */
import React, { Component } from 'react';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import styles from './CardsCreator.module.css';
import Modal from '../Modal/Modal';
import theme from '../../assets/db/showRoom/theme.json';

class CardsCreator extends Component {
    state = {
        isModalOpen: false,
        foto: [],
    };

    findItems = (items, id) => items.find(el => el.id === id);

    onClick = id => {
        const item = this.findItems(theme, id);
        this.setState({ isModalOpen: true, foto: item.img });
    };

    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        const { isModalOpen, foto } = this.state;
        const { data } = this.props;

        return data.map(item => (
            <li className={styles.card} key={item.id}>
                <h3 className={styles.title}>{item.name}</h3>
                <div className={styles.imgWrapper}>
                    <img
                        src={require(`../../assets/img/showroom/${
                            item.img[0]
                        }`)}
                        alt={item.name}
                    />
                    <button
                        type="button"
                        className={styles.fullscreenButton}
                        onClick={() => this.onClick(item.id)}
                    >
                        <ZoomInIcon />
                    </button>
                </div>

                {isModalOpen && (
                    <Modal type="theme" foto={foto} onClose={this.closeModal} />
                )}
            </li>
        ));
    }
}

export default CardsCreator;

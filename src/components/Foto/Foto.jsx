import React, { Component } from 'react';
import styles from './Foto.module.css';
import dragon from '../../assets/Dragon.png';
import Modal from '../Modal/Modal';
import foto from '../../assets/db/fotoComplex.json';

class Foto extends Component {
    state = {
        isModalOpen: false,
    };

    onClick = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        const { isModalOpen } = this.state;

        return (
            <>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Цікаво як виглядає розважальний комплекс?
                    </h2>
                    <div className={styles.container}>
                        <div className={styles.imgWrapper}>
                            <img src={dragon} alt="dragon"></img>
                        </div>
                        <button
                            type="button"
                            onClick={this.onClick}
                            className={styles.foto}
                        >
                            Дивитися фото
                        </button>
                    </div>
                </div>
                {isModalOpen && (
                    <Modal
                        type="complex"
                        foto={foto}
                        onClose={this.closeModal}
                    />
                )}
            </>
        );
    }
}

export default Foto;

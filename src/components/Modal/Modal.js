import React, { Component, createRef } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import 'react-awesome-slider/dist/styles.css';
import styles from './Modal.module.css';

class Modal extends Component {
    backdropeRef = createRef();

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = e => {
        if (e.code !== 'Escape') return;
        this.props.onClose();
    };

    handleBackDropClick = e => {
        const { current } = this.backdropeRef;
        if (current && e.target !== current) return;
        this.props.onClose();
    };

    render() {
        const { foto, onClose, type } = this.props;

        return (
            <div
                className={styles.backdrop}
                ref={this.backdropeRef}
                onClick={this.handleBackDropClick}
            >
                {type === 'complex' && (
                    <div className={styles.complexModal}>
                        <AwesomeSlider fillParent>
                            {foto.map(el => (
                                <div
                                    key={Date.now().toString()}
                                    data-src={require(`../../assets/img/complex/${el.img}`)}
                                />
                            ))}
                        </AwesomeSlider>
                        <button
                            type="button"
                            className={styles.fullscreenButton}
                            onClick={() => onClose()}
                        >
                            <ZoomOutIcon />
                        </button>
                    </div>
                )}

                {type === 'theme' && (
                    <div className={styles.modal}>
                        <AwesomeSlider fillParent>
                            {foto.map(el => (
                                <div
                                    key={el.id}
                                    data-src={require(`../../assets/img/showroom/${el}`)}
                                />
                            ))}
                        </AwesomeSlider>
                        <button
                            type="button"
                            className={styles.fullscreenButton}
                            onClick={() => onClose()}
                        >
                            <ZoomOutIcon />
                        </button>
                    </div>
                )}

                {type === 'playZone' && (
                    <div className={styles.modal}>
                        <AwesomeSlider fillParent>
                            <div
                                data-src={require(`../../assets/img/complex/${foto}`)}
                            />
                        </AwesomeSlider>
                        <button
                            type="button"
                            className={styles.fullscreenButton}
                            onClick={() => onClose()}
                        >
                            <ZoomOutIcon />
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default Modal;

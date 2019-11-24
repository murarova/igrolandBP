import React, { Component } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from './ScrollButton.module.css';

class ScrollButton extends Component {
    state = {
        intervalId: 0,
        thePosition: false,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                this.setState({ thePosition: true });
            } else {
                this.setState({ thePosition: false });
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', () => {
            if (window.scrollY > 170) {
                this.setState({ thePosition: true });
            } else {
                this.setState({ thePosition: false });
            }
        });
        window.scrollTo(0, 0);
    }

    onScrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    };

    scrollToTop = () => {
        const intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
        this.setState({ intervalId });
    };

    render() {
        const { thePosition } = this.state;
        return (
            <>
                {thePosition && (
                    <button
                        className={styles.scroll}
                        type="button"
                        onClick={this.scrollToTop}
                    >
                        <KeyboardArrowUpIcon />
                    </button>
                )}
            </>
        );
    }
}

export default ScrollButton;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Foto.module.css';
import dragon from '../../assets/Dragon.png';

const Foto = () => (
  <>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Цікаво як виглядає розважальний комплекс?</h2>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <img src={dragon} alt="dragon"></img>
        </div>
        <Link to="/foto" className={styles.foto}>
          Дивитися фото
        </Link>
      </div>
    </div>
  </>
);

export default Foto;

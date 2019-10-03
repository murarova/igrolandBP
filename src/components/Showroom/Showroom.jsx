import React from 'react';
import styles from './Showroom.module.css';

const Showroom = () => (
  <>
    <h2 className={styles.title}>Прайс-лист</h2>

    <div className={styles.wrapper}>
      <div className={styles.styleWrapper}>
        <div className={styles.imgWrapper}>
          <img src="/assets/showroom/costume.jpg" alt="costume"></img>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos commodi consequatur, aliquam in sunt
          reprehenderit, amet suscipit soluta molestiae voluptatem magni, impedit fugiat aspernatur porro. Placeat
          quibusdam odio illum facilis explicabo natus eos deleniti animi libero mollitia aliquam accusantium dolores
          sint distinctio aspernatur alias temporibus, reiciendis corrupti ab, rerum laborum culpa saepe non
          praesentium?
        </p>
      </div>
      <div className={styles.styleWrapper}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src="/assets/showroom/costume2.jpg" alt="costume"></img>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos commodi consequatur, aliquam in sunt
          reprehenderit, amet suscipit soluta molestiae voluptatem magni, impedit fugiat aspernatur porro. Placeat
          quibusdam odio illum facilis explicabo natus eos deleniti animi libero mollitia aliquam accusantium dolores
          sint distinctio aspernatur alias temporibus, reiciendis corrupti ab, rerum laborum culpa saepe non
          praesentium?
        </p>
      </div>
    </div>
  </>
);

export default Showroom;

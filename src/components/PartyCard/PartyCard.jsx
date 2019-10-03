import React from 'react';
import styles from './partyCard.module.css';

const PartyCard = () => (
  <>
    <h2 className={styles.title}>Лучшее предложение на День Рождения!</h2>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src="/assets/party-card.png" alt="Party Card" />
      </div>
      <div className={styles.description}>
        <p className={styles.desc_prag}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi blanditiis quidem quam in totam, molestiae
          perspiciatis doloremque, molestias itaque reiciendis, natus illo a enim sunt sapiente ad facere provident?
          Nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus delectus ab sit eum unde at tenetur
          nam explicabo fugiat ducimus iusto odio aliquam vitae animi hic ea, perferendis eaque mollitia commodi vel
          culpa!
        </p>
        <p className={styles.desc_prag}>
          Blanditiis soluta ullam praesentium, obcaecati facilis vero dolorem, natus eveniet magnam expedita quam atque,
          optio sed quibusdam doloremque repudiandae animi? Esse nobis debitis dolore fugiat culpa assumenda aliquam
          perspiciatis earum beatae nihil aperiam aut dicta, velit ad, cumque ratione nam repellat quisquam similique
          blanditiis
        </p>
        <p className={styles.desc_prag}>
          Blanditiis soluta ullam praesentium, obcaecati facilis vero dolorem, natus eveniet magnam expedita quam atque,
          optio sed quibusdam doloremque repudiandae animi? Esse nobis debitis dolore fugiat culpa assumenda aliquam
          perspiciatis earum beatae nihil aperiam aut dicta, velit ad, cumque ratione nam repellat quisquam similique
          blanditiis
        </p>
      </div>
    </div>
  </>
);

export default PartyCard;

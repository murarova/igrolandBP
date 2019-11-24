import React from "react";
import { Link } from "react-scroll";
import styles from "./Showroom.module.css";
import Header from "../../components/Header/Header";
import CardsCreator from "../../components/CardsCreator/CardsCreator";
import showroomPrice from "../../assets/db/showRoom/programs.json";
import theme from "../../assets/db/showRoom/theme.json";
import goods from "../../assets/db/showRoom/goods.json";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

const Showroom = () => (
  <>
    <Header />

    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Прайс-лист Шоурум</h2>
      <div className={styles.groupList}>
        <Link
          className={styles.groupItem}
          to="Шоу-програми"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          Шоу-програми
        </Link>

        <Link
          className={styles.groupItem}
          to="Аксесуари"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          Аксесуари
        </Link>
      </div>

      <h2>Тематика шоу програм</h2>
      <ul className={styles.list}>
        <CardsCreator data={theme} />
      </ul>

      <h2 id="Шоу-програми">Шоу-програми</h2>
      <ul className={styles.list}>
        {showroomPrice.map(item => (
          <li className={styles.card} key={item.id}>
            <p className={styles.description}>
              <span className={styles.name}>
                <span className={styles.descItem}>
                  <span className={styles.descItemResult}>{item.name}</span>
                </span>
                <span className={styles.descItem}>
                  <span className={styles.descItemResult}>
                    Анiматорiв: {item.animators}
                  </span>
                </span>
              </span>
              <span className={styles.price}>
                Ціна:{" "}
                <span className={styles.descItemResult}>{item.price} грн</span>
              </span>
            </p>
          </li>
        ))}
      </ul>

      <h2 id="Аксесуари">Товари та аксесуари</h2>
      <ul className={styles.list}>
        {goods.map(item => (
          <li className={styles.card} key={item.id}>
            <p className={styles.description}>
              <span className={styles.descItem}>
                <span className={styles.descItemResult}>{item.name}</span>
              </span>
              <span className={styles.descItem}>
                Ціна:
                <span className={styles.descItemResult}> {item.price} грн</span>
              </span>
            </p>
          </li>
        ))}
      </ul>
      <ScrollButton scrollStepInPx="40" delayInMs="10" />
    </div>
  </>
);

export default Showroom;

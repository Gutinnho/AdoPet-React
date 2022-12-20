import Card from "./Card";
import styles from "./Cards.module.scss";
import animais from "data/animais.json";

function Cards() {
  return (
    <ul className={styles.cards}>
      {animais.map((card) => (
        <Card {...card} />
      ))}
    </ul>
  );
}

export default Cards;

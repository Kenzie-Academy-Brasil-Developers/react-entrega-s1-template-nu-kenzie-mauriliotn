import { Imputs } from "./Imputs";
import { TotalMoney } from "./TotalMoney";
import styles from "./style.module.scss";
export const Form = ({ addCard, cardList }) => {
  return (
    <section className={styles.createFinanceBox}>
      <div className="container">
        <div className={styles.flexbox}>
          <Imputs addCard={addCard} />
        </div>
      </div>
      {cardList.length > 0 && <TotalMoney cardList={cardList} />}
    </section>
  );
};

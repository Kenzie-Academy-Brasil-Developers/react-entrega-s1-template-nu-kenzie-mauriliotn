import styles from "./style.module.scss";
import { Card } from "./Card";
export const List = ({ cardList, removeCard }) => {
  return (
    <section className={styles.createFinanceBox}>
      <div className="container">
        <h3 className="title three">Resumo financeiro</h3>
        {cardList.length === 0 ? (
          <h2 className="title two">Você ainda não possui nenhum lançamento</h2>
        ) : (
          <ul className={styles.flexbox}>
            {cardList.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                desc={card.desc}
                type={card.type}
                price={+card.price}
                removeCard={removeCard}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

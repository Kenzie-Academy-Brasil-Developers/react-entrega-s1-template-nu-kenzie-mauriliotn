import styles from "./style.module.scss";
export const TotalMoney = ({ cardList }) => {
  const entrada = cardList
    .filter((card) => card.type === "Entrada")
    .reduce((total, card) => total + Number(card.price), 0);

  const despesa = cardList
    .filter((card) => card.type === "Despesa")
    .reduce((total, card) => total + Number(card.price), 0);

  const saldo = entrada - despesa;

  return (
    <div className={`${styles.container} container `}>
      <div className={styles.flexbox}>
        <div>
          <h3 className="title three">Valor total:</h3>
          <span className="title three">
            {saldo.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <p className="body">O valor se refere ao saldo</p>
      </div>
    </div>
  );
};

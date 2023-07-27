import styles from "./style.module.scss";
import { DeleteBtn } from "../../Button";
import { toast } from "react-toastify";

export const Card = ({ desc, type, price, removeCard, id }) => {
  return (
    <>
      <li className={styles.flexbox}>
        <div className={styles.cardBox} type={type}>
          <div>
            <h3 className="title three">{desc}</h3>
            <p className="body">{type}</p>
          </div>
          <div className={styles.deleteContainer}>
            <span className="body">
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <DeleteBtn
              onClick={() => {
                removeCard(id);
                toast.success("Valor Removido", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }}
            />
          </div>
        </div>
      </li>
    </>
  );
};

import styles from "./style.module.scss";

export const SubmitBtn = ({ onClick }) => {
  return (
    <button
      type="submit"
      className={`${styles.btn} ${styles.btnForm} ${styles.full}`}
      onClick={onClick}
      // 
    >
      Inserir o valor
    </button>
  );
};
export const DeleteBtn = ({ onClick }) => {
  return (
    <button
      className={`${styles.btn} ${styles.btnRemove}`}
      onClick={onClick}
    >
      Excluir
    </button>
  );
};

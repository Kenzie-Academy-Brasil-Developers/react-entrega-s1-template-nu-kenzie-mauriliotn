import styles from "./style.module.scss";
export const Header = () => {
  return (
    <header className={styles.flexbox}>
      <div className="container">
        <img src="../../src/assets/Nu Kenzie.svg" alt="Logo Nu Kenzie" />
      </div>
    </header>
  );
};

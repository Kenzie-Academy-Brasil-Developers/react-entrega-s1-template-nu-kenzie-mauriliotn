import styles from "./style.module.scss";
import logo from "../../assets/Nu Kenzie.svg";
export const Header = () => {
  return (
    <header className={styles.flexbox}>
      <div className="container">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

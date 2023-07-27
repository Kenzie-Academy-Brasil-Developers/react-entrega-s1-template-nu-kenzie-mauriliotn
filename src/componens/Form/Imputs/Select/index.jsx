import { useState } from "react";
import styles from "./style.module.scss";
import angleDown from "../../../../assets/ANGLE-DOWN.svg";
export const Select = ({ type, setValue }) => {
  const [text, setText] = useState("Entrada");
  const [ative, setAtive] = useState(false);

  const handleClick = (event) => {
    setText(event.target.textContent);
    setValue(event.target.textContent);
    setAtive(!ative);
  };

  return (
    <div className={styles.flexbox}>
      <label className="title four" htmlFor="menu">
        Tipo de valor
      </label>
      <div
        className={`${styles.selectMenu} ${ative ? styles.active : ""}`}
        name="menu"
        id="menu"
        value={type}
        onClick={handleClick}
      >
        <div className={styles.selectBtn}>
          <span className={`body ${styles.sBtnText}`}>{text}</span>
          <img src={angleDown} className={styles.dropDonwArrow}></img>
        </div>

        <ul className={styles.options}>
          <li
            value="Entrada"
            className={`${styles.option} ${styles.entry}`}
            onClick={handleClick}
          >
            <span className={`body ${styles.optionText}`}>Entrada</span>
          </li>
          <li
            value="Despesa"
            className={`${styles.option} ${styles.exit}`}
            onClick={handleClick}
          >
            <span className={`body ${styles.optionText}`}>Despesa</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

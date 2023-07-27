import styles from "./style.module.scss";
export const Input = ({ placeholder, id, type, desc, value, setValue }) => {
  return (
    <>
      <div className={styles.flexbox}>
        <label className="title four" htmlFor={id}>
          {desc}
        </label>
        <input
          className={styles.inp}
          placeholder={placeholder}
          type={type}
          name={id}
          id={id}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </>
  );
};

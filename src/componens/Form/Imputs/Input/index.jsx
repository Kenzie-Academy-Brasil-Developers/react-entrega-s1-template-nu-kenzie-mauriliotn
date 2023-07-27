import styles from "./style.module.scss";
export const Input = ({ placeholder, id, type, desc, setValue, onInvalid }) => {
  return (
    <>
      <div className={styles.flexbox}>
        <label className="title four" htmlFor={id}>
          {desc}
        </label>
        <input
          className={styles.inp}
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </>
  );
};

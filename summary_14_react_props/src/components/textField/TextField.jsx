import styles from './TextField.module.css';

export default function TextField( {placeholder, errorText, helpText, label, size = 'large'} ) {

  return (
    <div className={`${styles.textFieldContainer} ${styles[size]}`}>
      { label && <label className={styles.textFieldLabel}>{label}</label> }
      <input className={styles.textField} placeholder={placeholder} />
      { errorText && <span className={styles.errorField}>{errorText}</span> }
      { helpText && <p className={styles.helpText}>{helpText}</p> }
    </div>
  )
};
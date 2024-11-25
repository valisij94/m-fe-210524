import styles from './Button.module.css';

export default function Button( {clickHandler, buttonText} ){

  return (
    <button
      className={styles.customButton}
      onClick={clickHandler}
    >
      {buttonText}
    </button>
  )
}
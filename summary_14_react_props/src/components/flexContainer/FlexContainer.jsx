import styles from './FlexContainer.module.css';

export default function FlexContainer( props ) {

  return (
    <div className={styles.flexContainer}>
      {props.children}
    </div>
  )
}
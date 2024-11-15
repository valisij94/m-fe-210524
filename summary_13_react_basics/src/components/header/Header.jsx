import styles from  './Header.module.css';

export default function Header() {

  return (
    <div className={styles.headerContainer}>
      <h2>Слет участников похода к Одинокой Горе</h2>
      <p>Добро пожаловать, уважаемые представители рас Средиземья!</p>
    </div>
  )
}
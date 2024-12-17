import { Link } from 'react-router';
import styles from './NavMenu.module.css';

export default function NavMenu() {

  return (
    <nav>
      <ul className={styles.navMenuContainer}>
        <li className={styles.navMenuItem}><Link to='/'>Home</Link></li>
        <li className={styles.navMenuItem}><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  );
}
import { NavLink } from 'react-router-dom';
import styles from './styles/MainNavigation.module.css';
import CheveronBack from './styles/icons/CheveronBack';

const MainNavigation = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.nav_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
          >
            <CheveronBack />
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;

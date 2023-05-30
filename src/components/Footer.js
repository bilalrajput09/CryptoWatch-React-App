import styles from './styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <span>
      © 2023 Copyright:
      {' '}
      <a href="https://github.com/bilalrajput09">Bilal Ahmed</a>
    </span>
  </footer>
);

export default Footer;

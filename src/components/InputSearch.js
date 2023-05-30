import styles from './styles/InputSearch.module.css';

const InputSearch = ({ inputSearchHandler }) => (
  <form className={styles.search_container}>
    <h2>Search Any Coin</h2>
    <input
      onChange={inputSearchHandler}
      placeholder="coin name"
      id="coinName"
      type="text"
      name="coinName"
    />
  </form>
);

export default InputSearch;

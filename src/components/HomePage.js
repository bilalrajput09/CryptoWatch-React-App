import { useDispatch, useSelector } from 'react-redux';
import InputSearch from './InputSearch';
import DisplayCoin from './DisplayCoin';
import styles from './styles/HomePage.module.css';
import { coinsActions } from '../redux/coinsSlice';

const HomePage = () => {
  const coinsArray = useSelector((state) => state.coins.coins);
  const dispatch = useDispatch();

  const filteredArray = useSelector((state) => state.coins.filteredArray);

  const inputSearchHandler = (e) => {
    e.preventDefault();
    const keyWord = e.target.value;
    if (!keyWord) {
      dispatch(coinsActions.resetFilteredArray(coinsArray));
    }
    if (keyWord !== '') {
      const coin = coinsArray.filter((c) => c.name.toLowerCase().startsWith(keyWord.toLowerCase()));
      dispatch(coinsActions.filterCoins(coin));
    }
  };

  return (
    <>
      <InputSearch inputSearchHandler={inputSearchHandler} />
      <main>
        <ul className={styles.coins_main_container}>
          {filteredArray.length !== 0
            ? filteredArray.map((coin) => (
              <DisplayCoin key={coin.id} coin={coin} />
            ))
            : coinsArray.map((coin) => (
              <DisplayCoin key={coin.id} coin={coin} />
            ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;

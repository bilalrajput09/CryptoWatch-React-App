import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './styles/CoinDetailsPage.module.css';

const CoinDetailsPage = () => {
  const params = useParams();
  const { coinID } = params;

  const coinsArray = useSelector((state) => state.coins.coins);
  if (coinsArray.length !== 0) {
    const [filteredCoin] = coinsArray.filter((coin) => coin.id === coinID);
    const {
      icon,
      price,
      name,
      rank,
      marketCap,
      symbol,
      priceChange1Day,
      priceChange1Week,
      twitter,
      website,
      totalSupply,
      volume,
    } = filteredCoin;

    return (
      <main>
        <section className={styles.coinDetailsPage_main_container}>
          <div className={styles.header}>
            <img src={icon} alt="Logo" />
            <h1>{name}</h1>
          </div>
          <ul className={styles.coinDetails_container}>
            <li>
              <div>Symbol</div>
              <div>{symbol}</div>
            </li>
            <li>
              <div>Rank</div>
              <div>{rank}</div>
            </li>
            <li>
              <div>Price</div>
              <div>{price.toFixed(2)}</div>
            </li>
            <li>
              <div>Volume</div>
              <div>{volume.toFixed(2)}</div>
            </li>

            <li>
              <div>Marketcap</div>
              <div>{marketCap.toFixed(2)}</div>
            </li>
            <li>
              <div>Price Change 1Week</div>
              <div>{priceChange1Week}</div>
            </li>

            <li>
              <div>Total Supply</div>
              <div>{totalSupply}</div>
            </li>
            <li>
              <div>Price Change 1Day</div>
              <div>{priceChange1Day}</div>
            </li>
            <li>
              <div>Twitter Handler</div>
              <div>
                <a href={twitter}>Twitter</a>
              </div>
            </li>
            <li>
              <div>Main Website</div>
              <div>
                <a href={website}>Website</a>
              </div>
            </li>
          </ul>
        </section>
      </main>
    );
  }
  return null;
};

export default CoinDetailsPage;

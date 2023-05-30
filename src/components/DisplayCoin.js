import { Link } from 'react-router-dom';
import styles from './styles/DisplayCoin.module.css';
import ArrowRightCircle from './styles/icons/ArrowRightCircle';

const DisplayCoin = (props) => {
  const { coin } = props;
  const {
    id, icon, price, name, rank, marketCap, symbol,
  } = coin;
  return (
    <li>
      <div className={styles.coin_container}>
        <div className={styles.icon_header_main_container}>
          <div className={styles.icon_container}>
            <img src={icon} alt="" />
            <h3>{name}</h3>
          </div>
          <div>
            <Link to={`/coins/${id}`}>
              <ArrowRightCircle />
            </Link>
          </div>
        </div>

        <div>
          <span>{symbol}</span>
          <p>
            Rank
            {rank}
          </p>
        </div>

        <p>
          Price:
          {price.toFixed(2)}
        </p>
        <p>
          Marketcap:
          {marketCap.toFixed(2)}
        </p>
      </div>
    </li>
  );
};

export default DisplayCoin;

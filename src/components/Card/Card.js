import styles from './Card.module.scss';
import clsx from 'clsx';
import { getCard, toggleCardFavorite } from '../../redux/store';
import { useSelector } from 'react-redux';


const Card = props => {

    const card = useSelector(state => getCard(state.cards, props.id));

    return(
    <li className={styles.card}>{props.title}
      <button className={styles.card__button} onClick={() => toggleCardFavorite(card.id)}>
        <i className={clsx('fa', 'fa-star-o', styles.btn, card.isFavorite && styles.liked)} />
      </button>
    </li>
  );
};

export default Card
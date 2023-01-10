import styles from './Card.module.scss';
import clsx from 'clsx';
import { getCard } from '../../redux/cardsRedux';
import { toggleCardFavorite, deleteCard } from '../../redux/cardsReducer';
import { useSelector, useDispatch } from 'react-redux';


const Card = props => {

    const card = useSelector(state => getCard(state.cards, props.id));
    const dispatch = useDispatch();

    return(
    <li className={styles.card}>{props.title}
      <div className={styles.card__buttons}>
        <button className={styles.card__button} onClick={() => dispatch(toggleCardFavorite(card.id))}>
          <i className={clsx('fa', 'fa-star-o', styles.btn, card.isFavorite && styles.liked)} />
        </button>
        <button className={styles.card__button} onClick={() => dispatch(deleteCard(card.id))}>
          <i className={clsx('fa', 'fa-trash', styles.btn, styles.delete)} />
        </button>
      </div>
    </li>
  );
};

export default Card
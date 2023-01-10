import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import FavoriteCards from '../FavoriteCards/FavoriteCards';

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>favorite</PageTitle>
      <FavoriteCards />
    </div>
  );
};
export default Favorite;
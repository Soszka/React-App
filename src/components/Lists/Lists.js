import { Link } from 'react-router-dom';
import styles from './Lists.module.scss';
import { useSelector } from 'react-redux';

const Lists = () => {

  const lists = useSelector(state => state.lists);

  return(
    <section className={styles.lists}>
      {lists.map( list => ( 
        <Link key={list.id} to={'/list/' + list.id} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link> ))}
    </section >

  );
};

export default Lists;
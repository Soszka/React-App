import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.navigation}>
                    <div className={styles.icon}>
                        <Link to="/"><i className="fa fa-tasks"></i></Link>
                    </div>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="About">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
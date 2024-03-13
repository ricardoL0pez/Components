import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';

const NavBar = () => {
    const navref = useRef();

    const showNavBar = () => {
        navref.current.classList.toggle(styles.responsive_nav);
    };

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navref} className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">Aboutme</a>
                <a href="#">My work</a>
                <a href="#">Contact</a>

                <button className={`${styles.nav_btn} ${styles.nav_close_btn}`} onClick={showNavBar}>
                    <FaTimes />
                </button>
                <button className={`${styles.nav_btn} ${styles.nav_open_btn}`} onClick={showNavBar}>
                    <FaBars />
                </button>
            </nav>
        </header>
    );
};

export default NavBar;

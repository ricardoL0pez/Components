import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';

const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(styles.responsive_nav);
    };

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef} >
                <a href="/#">Home</a>
                <a href="/#">Aboutme</a>
                <a href="/#">My work</a>
                <a href="/#">Contact</a>

                <button className={`${styles.nav_btn} ${styles.nav_close_btn}`} onClick={showNavBar}>
                    <FaTimes className={styles.icon}/>
                </button>
            </nav>
            <button className={styles.nav_btn} onClick={showNavBar}>
                    <FaBars className={styles.icon}/>
                </button>
        </header>
    );
};

export default NavBar;

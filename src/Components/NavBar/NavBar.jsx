import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    return (
        <header>
            <div>
                <img src={logo} className={styles.appLogo} alt="logo" />
                <h3>NavBar <span>CSS Modules</span></h3>
            </div>

            <div>
                <nav className={`${styles.nav} ${showMenu ? styles.navResponsive : ''}`}>
                
                    <a className={styles.a} href="/#">Home</a>
                    <a className={styles.a} href="/#">About</a>
                    <a className={styles.a} href="/#">Contact</a>
                    <button className={styles.logInBtn}>Log in</button>
                    <button className={styles.signInBtn}>Sign in</button>

                    <button className={styles.faTimes} onClick={handleClick}>
                        <FaTimes />
                    </button>
                </nav>

                <button className={styles.faBars} onClick={handleClick}>
                    <FaBars />
                </button>
            </div>

        </header>
    );
};

export default NavBar;



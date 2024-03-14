/* import { useRef } from 'react'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';

const NavBar = () => {
    const navRef = useRef();

const showNavBar = () => {
        navRef.current.classList.toggle(styles.responsive_nav);
    }; 

    return (
        <header>
            <h3>NavBar <span>Style module</span></h3>
            <div>
            <nav ref={navRef} className={styles.nav}>
                <a href="/#">Home</a>
                <a href="/#">Aboutme</a>
                <a href="/#">Contact</a>
                <button className={styles.logInBtn}>Log in</button>
                <button className={styles.signInBtn}>Sign in</button>

                <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavBar}>
                    <FaTimes className={styles.icon}/>
                </button>
            </nav>

            <button className={styles.navBtn} onClick={showNavBar}>
                    <FaBars className={styles.icon}/>
                </button>
            </div>
            
        </header>
    );
};

export default NavBar;


 */

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
            <h3>NavBar <span>Style module</span></h3>
            <div>
                <nav className={`${styles.nav} ${showMenu ? styles.navResponsive : ''}`}>
                    <a href="/#">Home</a>
                    <a href="/#">Aboutme</a>
                    <a href="/#">Contact</a>
                    <button className={styles.logInBtn}>Log in</button>
                    <button className={styles.signInBtn}>Sign in</button>

                     <button className={styles.faTimes} onClick={handleClick}>
                    <FaTimes/>
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



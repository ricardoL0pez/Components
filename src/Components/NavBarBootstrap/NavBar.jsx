import logo from '../../assets/logo.svg';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
        <img src={logo} className={styles.appLogo} alt="logo" />
          <h3 class="navbar-brand">NavBar <span>Bootstrap</span></h3>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-toggler">
            <ul class="navbar-nav d-flex justify-content-center align-items-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
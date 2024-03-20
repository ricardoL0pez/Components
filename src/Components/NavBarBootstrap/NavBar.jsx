import logo from '../../assets/logo.svg';
/* import styles from './navbar.module.css'; */
import './navbar.css';

const NavBar = () => {
  return (
    <header>
      <div>
      <img src={logo} className="appLogo" alt="logo" />
          <h3 >NavBar <span>Bootstrap</span></h3>
      </div>
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> 

          <div class="collapse navbar-collapse responsive" id="navbar-toggler">
            <ul class="navbar-nav d-flex justify-content-center align-items-center gap">
              <li class="nav-item">
                <a class="nav-link custom-color" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link custom-color" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link custom-color"  href="#">Contact</a>
              </li>
            </ul>
            <button class="btn btn-light">Log in</button>
                    <button type="button" class="btn btn-dark">Sign in</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
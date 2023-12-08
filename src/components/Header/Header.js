import './../../boostrap.css';
import'./Header.css';
import perfil from './../../assets/images/perfil.png';
import sun from './../../assets/images/sun.svg';
import moon from './../../assets/images/moon.svg';
import Search from "./../Search/Search";


function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark-custom">
    <div className="container-fluid mx-3 mx-5">
      <a className="navbar-brand c-ligth-custom fs-6 px-3 mx-0 fs-7" href="#">Tour Tech</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link c-ligth-custom fs-6 px-3 mx-0 fs-7" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-ligth-custom px-3 mx-0 fs-7" href="#" >Contactanos</a>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="btn-group px-3 contenedor-modo" role="group" aria-label="Modo Día/Noche">
          <button type="button" className="btn my-0  p-0 px-2 dia d-flex align-items-center"><img src={sun}></img></button>
          <button type="button" className="btn my-0  p-0 px-2  d-flex align-items-center noche"><img src={moon}></img></button>
        </div>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <div><img className="img-fluid imagen-perfil" src={perfil} alt="foto de perfil" /></div>
            </li>
          </ul>
      </div>
    </div>
  </nav>
  <Search></Search>
  </div>
  );
}

export default Header;
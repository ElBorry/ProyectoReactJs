import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      {/* Brand*/}
      <a className="navbar-brand" href="#"> MercadoCoder </a>
      {/* Links */}
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Vehiculos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Muebles</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Tecnología</a>
            </li>
        </ul>
      {/* CartWidget */}
      <CartWidget />
      </div>
    </nav>
  );
};

export default NavBarIn;

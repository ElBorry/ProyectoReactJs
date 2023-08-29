import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
    <nav>
      <h1>
        <Link to="/">samsung</Link>
      </h1>

      <ul>
        <li>
          <NavLink to="/category/phones">Telefonos</NavLink>
        </li>
        <li>
          <NavLink to="/category/tablets">Tablets</NavLink>
        </li>
        <li>
          <NavLink to="/category/notebooks">Notebooks</NavLink>
        </li>
      </ul>
      {/* CartWidget */}
      <CartWidget />
    </nav>
    </div>
  );
};

export default NavBar;

import logo from "../../img/LogoPokemon.png";
import PokeballWidget from "../PokeballWidget/PokeballWidget";

import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo"></div>
      <div className="nav-items">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/pokedex">
          Pokedex
        </Link>
        <Link className="nav-link" to="myaccount">
          My Account
        </Link>
        <Link className="nav-link">
          <PokeballWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

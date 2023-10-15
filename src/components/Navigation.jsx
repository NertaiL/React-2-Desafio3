import { NavLink } from "react-router-dom";
import pokenav from "../assets/icons/pokenavedit.png";
import "./Navigation.css";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <nav className="navbar">
      <div>
        <img src={pokenav} alt="pokemon" className="pokenav" />
      </div>
      <div className="home-pokemon">
        <div className="home">
          <NavLink className={setActiveClass} to="/">
            {" "}
            Home{" "}
          </NavLink>{" "}
        </div>
        <div className="pokemo">

        <NavLink className={setActiveClass} to="/pokemons">
          {" "}
          Pokemon{" "}
        </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;

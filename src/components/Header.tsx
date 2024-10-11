import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Header = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className="Header">
      <Link to="/">
        <h1>Giphy App</h1>
      </Link>
      <Link to="/favorites">Favorites</Link>
      <button onClick={() => toggleDarkMode()}>Toggle Dark Mode</button>
    </header>
  );
};

export default Header;

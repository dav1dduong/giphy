import { useContext } from "react";
import "./App.css";
import Details from "./components/Details";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import DarkModeContext from "./context/DarkModeContext";

// Routing always set up in App.tsx

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`App ${darkMode ? " dark-mode" : ""}`}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:zebra" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* wildcard aka redirect: */}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

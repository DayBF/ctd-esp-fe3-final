import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/ContextProvider";

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <nav>
      <div className="navLinks">
        <Link to="/home">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        <Link to="/favs">
          <h4>Favs</h4>
        </Link>
      </div>
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME", payload: state.data })}
      >
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;

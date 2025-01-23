import { Link } from "react-router-dom";
import { useTheme } from "../../theme-context";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="mode-switch">
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <MdOutlineDarkMode title="Dark Mode" />
          ) : (
            <MdOutlineLightMode title="Light Mode" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

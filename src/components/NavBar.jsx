import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h2>FocusFlow</h2>
      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/add">+ Add Subject</Link>
      </div>
    </nav>
  );
}

export default NavBar;

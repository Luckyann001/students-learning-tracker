import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Student Tracker</h2>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Learning</Link>
      </div>
    </nav>
  );
}

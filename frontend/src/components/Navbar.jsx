import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">TBI Project</h1>

        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
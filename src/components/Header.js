import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className = "header">
      <Link className="navlink" to=''>Sign Up</Link>
      <Link className="navlink" to=''>Login</Link>
    </div>
  );
}

export default Header;
import React from "react";
import {Link} from "react-router-dom";


const Header = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">React Basic</Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user">User</Link>
          </li>
        </ul>
    </nav>
);

export default Header;

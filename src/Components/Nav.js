import logo from "../Assets/logo.png";
import "./Header.css";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="Navigation">
            <div className="logo">
                <img src={logo} alt="little lemon logo" className="logo-image"/>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/bookings">Reservations</Link>
                </li>
                <li>
                    <Link to="/order">Order Online</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;
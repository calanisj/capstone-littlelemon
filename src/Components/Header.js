import logo from "./Resources/logo.png";
import "./Header.css";

function Header() {
    return (
        <nav className="Navigation">
            <div className="logo">
                <img src={logo} alt="little lemon logo" className="logo-image"/>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/order">Order Online</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
            </nav>
    );
};
export default Header;
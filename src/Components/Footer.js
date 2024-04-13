import logoWhite from '../Assets/logoWhite.png';
function Footer() {
    return (
    <footer className="footer">
        <img className="logo-footer" src={logoWhite} alt='Little Lemon Logo Footer' />
        <div className="footer-nav">
            <NavLinks />
        </div>

        <div className="footer-info">
            <p className='copyright'>&copy; 2024 Little Lemon Restaurant</p>
        </div>
    </footer>
  );
}

function NavLinks() {
  return (
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/bookings">Reservations</a></li>
    </ul>
  );
}

export default Footer;
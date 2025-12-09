import { useEffect, useState } from 'react';
import './Header.css';
import logo2 from '../../assets/logo.png';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

interface HeaderProps {
  items?: string[];
  logo?: string;
  login?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { items = ['Home', 'Events'], logo } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    try {
      const token = Cookies.get('auth_token');
      console.log('Checking cookie:', token);
      if (token && token !== 'undefined') {
        console.log('token found:', token);
        setLogin(true);
      } else {
        console.log('no valid token');
        setLogin(false);
      }
    } catch (error) {
      console.error('Error reading cookie:', error);
      setLogin(false);
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div
        onClick={() => setMobileMenuOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgb(0, 0, 0, 0.5)',
          display: mobileMenuOpen ? 'block' : 'none',
          pointerEvents: 'all',
          zIndex: 998
        }}
      ></div>
      <header className={`${mobileMenuOpen ? 'header-mobile-open' : ''}`}>
        <a href='/' className='logo'><img src={logo || logo2} alt="logo" /></a>
        <nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className={`nav-links header-links ${mobileMenuOpen ? 'active' : ''}`}>
            {items.map((item, index) => (
              <li className='nav-item' key={index}>
                <a href={`/${item.replace(/\s/g, '').toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
            {/* TEAM YEAR DROPDOWN */}

            <li className=" nav-item team-dropdown">
              <Link to='/team/25-26'>
                <button className="team-btn">Team ▾</button>
              </Link>
              <div className="content">
                <Link to="/team/25-26" onClick={() => setMobileMenuOpen(false)}>25–26</Link>
                <Link to="/team/24-25" onClick={() => setMobileMenuOpen(false)}>24–25</Link>
              </div>
            </li>

            {!login && <li className='nav-item mobile-login'><a href='/login'><button className='login-btn'>Login/Signup</button></a></li>}
            {login && <li className='nav-item mobile-login'><a href='/profile'><button className='login-btn'>Profile</button></a></li>}
          </ul>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!login && <a href='/login'><button className='login-btn desktop-login'>Login/Signup</button></a>}
          {login && <a href='/profile'><button className='login-btn desktop-login'>Profile</button></a>}
          <div className="hamburger-menu" onClick={toggleMobileMenu} style={{ marginLeft: '10px' }}>
            <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
            <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
            <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
          </div>
        </div>
      </header>
    </>
  )
};

export default Header

import { useState } from 'react';
import './Header.css';
import logo2 from '../../assets/logo.png';

interface HeaderProps {
  items?: string[];
  logo?: string;
  login?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { items =['Home', 'Gallery', 'Events', 'Our Team'] , logo, login } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <a href='/' className= 'logo'><img src={logo||logo2} alt="logo" /></a>
      <nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className={`nav-links header-links ${mobileMenuOpen ? 'active' : ''}`}>
          {items.map((item, index) => (
            <li className='nav-item' key={index}>
              <a href={`/${item.replace(/\s/g, '').toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
          {!login && <li className='nav-item mobile-login'><button className='login-btn'>Login/Signup</button></li>}
        </ul>
      </nav>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
      </div>
      {!login && <button className='login-btn desktop-login'>Login/Signup</button>}
    </header>
  )
};

export default Header

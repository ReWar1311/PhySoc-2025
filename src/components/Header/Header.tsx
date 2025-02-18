import './Header.css';
import logo2 from '../../assets/logo.png';

interface HeaderProps {
  items?: string[];
  logo?: string;
    login?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { items =['Home', 'Gallary', 'Events', 'Our Team'] , logo, login } = props;
  return (
    <header>
    <a href='/' className= 'logo'><img  src={logo||logo2} alt="logo" /></a>
    <nav className='navbar'>
    <ul className='nav-links header-links'>
        {items.map((item, index) => (<li key={index}><a href={`/${item.replace(/\s/g, '').toLowerCase()}`}>{item}</a></li>))}
    </ul>
    </nav>
    {!login && <button className='login-btn'>Login/Signup</button>}
    </header>
  )
};

export default Header
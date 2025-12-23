import './Footer.css';

interface FooterProps {
  options?: string[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const { options= ['Home', 'About', 'FAQ', 'Admin'] } = props;
  return (
    <footer className="footer">
      <a className="logo footer-logo" href="/">
        <img src="../../assets/logo.png" alt="logo" />
      </a>
      <p>© 2025 Physics Society, IIT Delhi. All rights reserved.</p>
      <nav className="navbar">
      <ul className="nav-links">
        {options.map((option, index) => (
          <li className="nav-item" key={index}>
            <a href={`/${option}`}>{option}</a>
          </li>
        ))}
      </ul>
      </nav>
    </footer>
  );
};

export default Footer

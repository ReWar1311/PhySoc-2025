import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Grids from '../../components/Grids/Grids';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Handle login logic here
      console.log('Login attempt with:', { email, password });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page-container">
      <div className="grid-elem-login"><Grids /></div>
      
      <div className="login-home">
        <Header />
        <div className="login-container">
          <div className="login-card">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <button 
                type="submit" 
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <div className="login-footer">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
              <p><Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link></p>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Login;

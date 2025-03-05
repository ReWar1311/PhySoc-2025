import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Grids from '../../components/Grids/Grids';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle signup logic here
    console.log('Signup attempt with:', { name, email, password });
  };

  return (
    <div className="signup-page-container">
      <div className="grid-elem-login">      <Grids /></div>

      <div className="login-home">
        <Header />
        <div className="signup-container">
          <div className="signup-card">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  minLength={6}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <div className="signup-footer">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Signup;

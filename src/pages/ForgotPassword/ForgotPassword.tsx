import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Grids from '../../components/Grids/Grids';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you'd call your API here
      console.log('Password reset requested for:', email);
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="forgot-password-page-container">
      <div className="grid-elem-login"> <Grids /></div>

      <div className="login-home">
        <Header />
        <div className="forgot-password-container">
          <div className="forgot-password-card">
            {!isSubmitted ? (
              <>
                <h2>Reset Password</h2>
                <p className="forgot-password-info">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
                {error && <div className="error-message">{error}</div>}
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
                  <button 
                    type="submit" 
                    className="forgot-password-button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Reset Password'}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <h2>Email Sent</h2>
                <p>
                  If an account exists for {email}, you will receive password reset instructions.
                </p>
              </div>
            )}
            <div className="forgot-password-footer">
              <p><Link to="/login">Back to Login</Link></p>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default ForgotPassword;

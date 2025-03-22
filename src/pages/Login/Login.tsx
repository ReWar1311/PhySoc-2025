import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';
import api from '../../services/api';
import { Toast } from '../../components/Toast/Toast';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await api.auth.signIn({ user_name: email, password });
      
      if (response.data.success) {
        if (response.data.token) {
          localStorage.setItem('auth_token', response.data.token);
        }
        
        toast.success('Login successful!');
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        toast.error(response.data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      
      if (error.response) {
        const message = error.response.data?.message || 'Invalid credentials';
        toast.error(`Login failed: ${message}`);
      } else if (error.request) {
        toast.error('No response from server. Please try again later.');
      } else {
        toast.error('Login failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-container">
      <Toast />
      
      <div className="login-home">
        <div className="login-container">
          <div className="login-card">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
                  type="username"
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
    </div>
  );
};

export default Login;

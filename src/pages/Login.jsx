import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch, FaBriefcase, FaUserTie, FaBuilding, FaMapMarkerAlt, FaClock, FaEdit } from 'react-icons/fa';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulação de autenticação
    setTimeout(() => {
      if (credentials.email === 'admin@refugio.com' && credentials.password === 'admin123') {
        // Salva token de autenticação (simulado)
        localStorage.setItem('authToken', 'authenticated');
        navigate('/admin');
      } else {
        setError('Credenciais inválidas. Por favor, tente novamente.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">

          <h2>Área Administrativa</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="seu.email@exemplo.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar</label>
            </div>
            <a href="#" className="forgot-password">Esqueceu a senha?</a>
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (
              <>
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
                Autenticando...
              </>
            ) : 'Entrar'}
          </button>
        </form>
        

      </div>
    </div>
  );
};

export default Login;
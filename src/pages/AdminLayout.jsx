// AdminLayout.js
import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch, FaBriefcase, FaUserTie, FaBuilding, FaMapMarkerAlt, FaClock, FaEdit } from 'react-icons/fa';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };
  
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <svg className="logo-icon" viewBox="0 0 24 24">
            <path fill="#ffffff" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
          </svg>
          <h2>Refúgio Solidário</h2>
          <p>Área Administrativa</p>
        </div>
        
        <nav className="admin-nav">
          <ul>
            <li className={location.pathname.includes('refugees') ? 'active' : ''}>
              <Link to="/refugees">
                <i className="fas fa-users"></i> Refugiados
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-book"></i> Cursos
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-briefcase"></i> Oportunidades
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chart-bar"></i> Relatórios
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-cog"></i> Configurações
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="admin-footer">
          <Link to="/" className="back-to-site">
            <i className="fas fa-arrow-left"></i> Voltar ao site
          </Link>
        </div>
      </aside>
      
      {/* Conteúdo Principal */}
      <main className="admin-main">
        <div className="admin-header">
          <div className="admin-header-content">
            <h1>Painel Administrativo</h1>
            <div className="user-info">
              <img src="https://ui-avatars.com/api/?name=Admin&background=0D3B66&color=fff" alt="Admin" />
              <span>Administrador</span>
                            <button onClick={handleLogout} className="logout-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.5 1v7h1V1h-1z"/>
                  <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
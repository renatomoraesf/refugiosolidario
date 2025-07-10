import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Efeito para fechar o menu quando a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsOpen(false);
      }
    };

    // Adiciona evento de scroll para mudar a aparência do navbar
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/" className="logo" onClick={closeMenu}>
              <svg className="logo-icon" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
              </svg>
              <span className="logo-text">Refúgio Solidário</span>
            </Link>
          </div>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <NavLink to="/" end onClick={closeMenu}>Início</NavLink>
            <NavLink to="/quem-somos" onClick={closeMenu}>Quem Somos</NavLink>
            <NavLink to="/cursos" onClick={closeMenu}>Cursos</NavLink>
            <NavLink to="/recursos" onClick={closeMenu}>Recursos</NavLink>
            <NavLink to="/empregos" onClick={closeMenu}>Empregos</NavLink>
            <NavLink to="/noticias" onClick={closeMenu}>Notícias</NavLink>
            <NavLink to="/contato" onClick={closeMenu}>Contato</NavLink>
            <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
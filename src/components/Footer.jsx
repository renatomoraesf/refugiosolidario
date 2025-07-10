// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="logo">
              <svg className="logo-icon" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
              </svg>
              <span className="logo-text">Refúgio Solidário</span>
            </Link>
            <p>Educação e capacitação para refugiados no Brasil</p>
          </div>
          
          <div className="footer-links">
            <h3>Links Rápidos</h3>
            <ul>
              <li><Link to="/quem-somos">Quem Somos</Link></li>
              <li><Link to="/cursos">Cursos</Link></li>
              <li><Link to="/recursos">Recursos</Link></li>
              <li><Link to="/empregos">Empregos</Link></li>
              <li><Link to="/noticias">Notícias</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contato</h3>
            <p>contato@refugiosolidario.org.br</p>
            <p>+55 (11) 99999-9999</p>
            <p>São Paulo - SP, Brasil</p>
          </div>
          
          <div className="footer-social">
            <h3>Siga-nos</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="newsletter">
              <input type="email" placeholder="Seu e-mail" />
              <button className="btn">Inscrever</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Refúgio Solidário. Todos os direitos reservados.</p>
          <p>Alinhado aos ODS 4, 5 e 8 da ONU</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
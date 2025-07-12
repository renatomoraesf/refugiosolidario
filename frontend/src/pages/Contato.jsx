import React from 'react';
import Banner from '../components/Banner';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contato = () => {
  return (
    <div>
      <Banner 
        title="Fale Conosco" 
        subtitle="Estamos aqui para ajudar. Entre em contato com nossa equipe"
      />

      <section className="section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Informações de Contato</h2>
              
              <div className="contact-item">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="text">
                  <h3>Endereço</h3>
                  <p>Av. Paulista, 1000<br />São Paulo - SP, 01310-100</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="text">
                  <h3>Telefone</h3>
                  <p>+55 (11) 99999-9999</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="text">
                  <h3>E-mail</h3>
                  <p>contato@refugiosolidario.org.br</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <FaClock />
                </div>
                <div className="text">
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h</p>
                </div>
              </div>
              
              <div className="map">
                <div className="map-placeholder"></div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Envie uma mensagem</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nome completo</label>
                  <input type="text" id="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input type="tel" id="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Assunto</label>
                  <select id="subject" required>
                    <option value="">Selecione um assunto</option>
                    <option value="cursos">Informações sobre cursos</option>
                    <option value="emprego">Oportunidades de emprego</option>
                    <option value="voluntario">Trabalho voluntário</option>
                    <option value="parceria">Parcerias institucionais</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn">Enviar mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-contact">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Como posso me inscrever nos cursos?</h3>
              <p>Acesse nossa página de Cursos, selecione o curso desejado e clique em "Inscreva-se". Preencha o formulário com seus dados e nossa equipe entrará em contato.</p>
            </div>
            <div className="faq-item">
              <h3>Quais documentos preciso para me registrar no portal?</h3>
              <p>Para acessar nossos serviços, você precisará do protocolo de refúgio ou documento de identidade emitido no Brasil. Não exigimos documentos específicos para navegar no portal.</p>
            </div>
            <div className="faq-item">
              <h3>Como minha empresa pode se tornar parceira?</h3>
              <p>Empresas interessadas em oferecer oportunidades de emprego ou apoiar nossos projetos podem entrar em contato pelo e-mail parcerias@refugiosolidario.org.br ou preencher o formulário de contato acima.</p>
            </div>
            <div className="faq-item">
              <h3>Oferecem atendimento psicológico?</h3>
              <p>Sim, temos parceria com psicólogos voluntários que oferecem atendimento gratuito ou a preços simbólicos. Entre em contato para mais informações.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
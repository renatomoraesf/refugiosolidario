import React from 'react';
import Banner from '../components/Banner';
import { FaSearch, FaBriefcase, FaUserTie, FaBuilding, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Empregos = () => {
  const vagas = [
    {
      title: "Assistente Administrativo",
      company: "Empresa Global Ltda",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Procuramos assistente administrativo com conhecimentos em pacote Office e organização de documentos.",
      posted: "2 dias atrás"
    },
    {
      title: "Desenvolvedor Web Júnior",
      company: "Tech Solutions",
      location: "Remoto",
      type: "Tempo Integral",
      description: "Vaga para desenvolvedor front-end com conhecimento em HTML, CSS, JavaScript e React.",
      posted: "5 dias atrás"
    },
    {
      title: "Auxiliar de Cozinha",
      company: "Restaurante Sabores do Mundo",
      location: "Rio de Janeiro, RJ",
      type: "Meio Período",
      description: "Auxiliar de cozinha para restaurante multicultural. Experiência prévia não necessária.",
      posted: "1 semana atrás"
    },
    {
      title: "Intérprete de Árabe",
      company: "Hospital Municipal",
      location: "Brasília, DF",
      type: "Freelancer",
      description: "Intérpretes de árabe para auxiliar em atendimentos médicos. Pagamento por hora.",
      posted: "3 dias atrás"
    },
    {
      title: "Assistente de Vendas",
      company: "Loja de Departamentos",
      location: "Porto Alegre, RS",
      type: "Tempo Integral",
      description: "Atendimento ao cliente, organização de estoque e apoio nas vendas.",
      posted: "1 semana atrás"
    },
    {
      title: "Professor de Inglês",
      company: "Escola de Idiomas",
      location: "Curitiba, PR",
      type: "Meio Período",
      description: "Professor de inglês para turmas de jovens e adultos. Certificação TEFL desejável.",
      posted: "4 dias atrás"
    }
  ];

  return (
    <div>
      <Banner 
        title="Oportunidades de Emprego" 
        subtitle="Conectamos refugiados qualificados com empresas comprometidas com a diversidade"
      />

      <section className="section">
        <div className="container">
          <div className="search-section">
            <div className="search-box">
              <input type="text" placeholder="Buscar vagas por cargo, empresa ou palavra-chave" />
              <input type="text" placeholder="Localização" />
              <button className="btn"><FaSearch /> Buscar</button>
            </div>
          </div>

          <div className="vagas-grid">
            {vagas.map((vaga, index) => (
              <div key={index} className="vaga-card">
                <div className="vaga-header">
                  <h3>{vaga.title}</h3>
                  <span className="company"><FaBuilding /> {vaga.company}</span>
                </div>
                
                <div className="vaga-details">
                  <div className="detail"><FaMapMarkerAlt /> {vaga.location}</div>
                  <div className="detail"><FaClock /> {vaga.type}</div>
                </div>
                
                <p className="vaga-description">{vaga.description}</p>
                
                <div className="vaga-footer">
                  <span className="posted">Publicada {vaga.posted}</span>
                  <button className="btn">Candidatar-se</button>
                </div>
              </div>
            ))}
          </div>

          <div className="empresas-parceiras">
            <h3>Empresas Parceiras</h3>
            <div className="logos">
              <div className="logo-item">Empresa A</div>
              <div className="logo-item">Empresa B</div>
              <div className="logo-item">Empresa C</div>
              <div className="logo-item">Empresa D</div>
              <div className="logo-item">Empresa E</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cadastro-empresas">
        <div className="container">
          <div className="cadastro-content">
            <div className="text">
              <h2>Sua empresa quer fazer a diferença?</h2>
              <p>Junte-se a nós e tenha acesso a talentos diversos e qualificados. Cadastre oportunidades de emprego para refugiados.</p>
              <button className="btn">Cadastrar Empresa</button>
            </div>
            <div className="image">
              <div className="placeholder-img"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Empregos;
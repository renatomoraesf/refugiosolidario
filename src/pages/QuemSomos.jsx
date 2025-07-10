import React from 'react';
import '../App.css';

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <header className="banner">
        <div className="banner-content">
          <h1>Quem Somos</h1>
          <p>Conectando refugiados a oportunidades de educação e capacitação no Brasil</p>
        </div>
      </header>

      <main>
        {/* Seção de Propósito */}
        <section className="purpose-section">
          <div className="container">
            <h2>Nosso Propósito</h2>
            <p>O Refúgio Solidário nasceu da necessidade de criar pontes entre a comunidade de refugiados no Brasil e oportunidades de educação, capacitação e desenvolvimento profissional. Nosso portal integra iniciativas alinhadas aos Objetivos de Desenvolvimento Sustentável (ODS 4, 5 e 8) da ONU, proporcionando acesso a recursos educacionais, cursos profissionalizantes e apoio à integração no mercado de trabalho.</p>
            
            <div className="mission-vision">
              <div className="card">
                <h3>Missão</h3>
                <p>Promover a inclusão social e econômica de refugiados através da educação de qualidade e capacitação profissional.</p>
              </div>
              <div className="card">
                <h3>Visão</h3>
                <p>Ser a principal plataforma de referência em educação e capacitação para refugiados na América Latina até 2030.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section className="benefits-section">
          <div className="container">
            <h2>Como Nossos Recursos Beneficiam</h2>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="icon-circle">
                  <span>👩‍🎓</span>
                </div>
                <h3>Jovens</h3>
                <p>Cursos de idiomas, preparação para vestibular, formação técnica e orientação profissional para construir um futuro no Brasil.</p>
              </div>
              
              <div className="benefit-card">
                <div className="icon-circle">
                  <span>👩</span>
                </div>
                <h3>Mulheres</h3>
                <p>Programas de empreendedorismo feminino, capacitação em áreas com alta demanda e apoio à validação de diplomas.</p>
              </div>
              
              <div className="benefit-card">
                <div className="icon-circle">
                  <span>🧒</span>
                </div>
                <h3>Crianças</h3>
                <p>Aulas de reforço escolar, atividades culturais e apoio psicopedagógico para integração no sistema educacional brasileiro.</p>
              </div>
              
              <div className="benefit-card">
                <div className="icon-circle">
                  <span>👪</span>
                </div>
                <h3>Famílias</h3>
                <p>Orientacão sobre direitos educacionais, programas de bolsas de estudo e cursos profissionalizantes para todos os membros.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Apoio */}
        <section className="support-section">
          <div className="container">
            <h2>Como Você Pode Contribuir</h2>
            
            <div className="support-cards">
              <div className="support-card">
                <h3>Empresas e Patrocinadores</h3>
                <ul>
                  <li>Financiamento de bolsas de estudo e cursos profissionalizantes</li>
                  <li>Oportunidades de estágio e emprego para refugiados capacitados</li>
                  <li>Doações para manutenção e expansão da plataforma</li>
                </ul>
              </div>
              
              <div className="support-card">
                <h3>Escolas e Universidades</h3>
                <ul>
                  <li>Parcerias para oferta de vagas em cursos regulares</li>
                  <li>Programas de extensão com aulas de português e cultura brasileira</li>
                  <li>Validação de diplomas e reconhecimento de estudos anteriores</li>
                </ul>
              </div>
              
              <div className="support-card">
                <h3>ONGs e Instituições</h3>
                <ul>
                  <li>Compartilhamento de recursos educacionais e metodologias</li>
                  <li>Divulgação de iniciativas complementares à nossa plataforma</li>
                  <li>Parcerias para atendimento psicossocial e orientação jurídica</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Impacto */}
        <section className="impact-section">
          <div className="container">
            <h2>Nosso Impacto</h2>
            <div className="impact-stats">
              <div className="stat">
                <span className="number">1.200+</span>
                <span className="label">Refugiados capacitados</span>
              </div>
              <div className="stat">
                <span className="number">35</span>
                <span className="label">Parcerias institucionais</span>
              </div>
              <div className="stat">
                <span className="number">18</span>
                <span className="label">Cursos disponíveis</span>
              </div>
              <div className="stat">
                <span className="number">7</span>
                <span className="label">Idiomas suportados</span>
              </div>
            </div>
          </div>
        </section>
      </main>

   </div>
  );
}

export default App;
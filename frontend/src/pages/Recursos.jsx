import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import { FaBook, FaGlobe, FaGraduationCap, FaHandHoldingHeart, FaBalanceScale, FaComments } from 'react-icons/fa';

const Recursos = () => {
  const recursos = [
    {
      icon: <FaBook />,
      title: "Biblioteca Digital",
      description: "Acesso a milhares de livros, artigos e materiais didáticos em diversos idiomas.",
      category: "Educação"
    },
    {
      icon: <FaGlobe />,
      title: "Tradutor Online",
      description: "Ferramenta de tradução multilíngue com foco em documentos oficiais e termos jurídicos.",
      category: "Comunicação"
    },
    {
      icon: <FaGraduationCap />,
      title: "Validação de Diplomas",
      description: "Guia completo para reconhecimento de diplomas estrangeiros no Brasil.",
      category: "Educação"
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Apoio Psicossocial",
      description: "Serviços de aconselhamento e suporte emocional para refugiados.",
      category: "Saúde"
    },
    {
      icon: <FaBalanceScale />,
      title: "Assistência Jurídica",
      description: "Informações sobre direitos e acesso a advogados voluntários.",
      category: "Jurídico"
    },
    {
      icon: <FaComments />,
      title: "Comunidade Online",
      description: "Fórum para troca de experiências e networking entre refugiados.",
      category: "Comunidade"
    }
  ];

  const categorias = [
    "Todos", "Educação", "Jurídico", "Saúde", "Comunicação", "Comunidade"
  ];

  return (
    <div>
      <Banner 
        title="Recursos para Refugiados" 
        subtitle="Ferramentas e informações essenciais para sua jornada no Brasil"
      />

      <section className="section">
        <div className="container">
          <div className="filtro-categorias">
            {categorias.map((categoria, index) => (
              <button key={index} className="btn btn-outline">
                {categoria}
              </button>
            ))}
          </div>

          <div className="recursos-grid">
            {recursos.map((recurso, index) => (
              <Card 
                key={index}
                icon={recurso.icon}
                title={recurso.title}
                description={recurso.description}
              >
                <div className="recurso-category">{recurso.category}</div>
                <button className="btn">Acessar</button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section recursos-extra">
        <div className="container">
          <h2 className="section-title">Informações Importantes</h2>
          <div className="info-cards">
            <div className="info-card">
              <h3>Documentação Necessária</h3>
              <p>Guia completo dos documentos necessários para regularização migratória, acesso a serviços públicos e obtenção de trabalho formal.</p>
              <a href="#" className="btn btn-outline">Baixar Guia</a>
            </div>
            <div className="info-card">
              <h3>Mapa de Serviços</h3>
              <p>Encontre organizações, serviços públicos e instituições de apoio a refugiados em todo o Brasil.</p>
              <a href="#" className="btn btn-outline">Acessar Mapa</a>
            </div>
            <div className="info-card">
              <h3>Glossário Jurídico</h3>
              <p>Termos jurídicos explicados de forma simples em vários idiomas para facilitar seu entendimento.</p>
              <a href="#" className="btn btn-outline">Consultar Termos</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recursos;
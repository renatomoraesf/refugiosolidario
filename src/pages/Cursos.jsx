import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import { FaLanguage, FaLaptopCode, FaUsers, FaChartLine, FaHandsHelping, FaUserGraduate } from 'react-icons/fa';

const Cursos = () => {
  const cursos = [
    {
      icon: <FaLanguage />,
      title: "Português para Refugiados",
      description: "Curso intensivo de português com foco em comunicação prática para situações do dia a dia e profissional.",
      duration: "3 meses",
      level: "Iniciante ao Avançado"
    },
    {
      icon: <FaLaptopCode />,
      title: "Introdução à Programação",
      description: "Aprenda as bases da programação e desenvolvimento web para iniciar uma carreira em tecnologia.",
      duration: "4 meses",
      level: "Iniciante"
    },
    {
      icon: <FaUsers />,
      title: "Atendimento ao Cliente",
      description: "Desenvolva habilidades essenciais para trabalhar em áreas de atendimento, vendas e suporte.",
      duration: "2 meses",
      level: "Básico"
    },
    {
      icon: <FaChartLine />,
      title: "Gestão de Pequenos Negócios",
      description: "Aprenda a planejar, iniciar e gerenciar seu próprio negócio no Brasil.",
      duration: "3 meses",
      level: "Intermediário"
    },
    {
      icon: <FaHandsHelping />,
      title: "Assistente de Saúde",
      description: "Formação para atuar como auxiliar em clínicas, hospitais e asilos.",
      duration: "4 meses",
      level: "Básico"
    },
    {
      icon: <FaUserGraduate />,
      title: "Preparatório para o ENEM",
      description: "Curso preparatório para o Exame Nacional do Ensino Médio para acesso ao ensino superior.",
      duration: "6 meses",
      level: "Intermediário"
    }
  ];

  return (
    <div>
      <Banner 
        title="Nossos Cursos" 
        subtitle="Capacitação profissional e educacional para refugiados no Brasil"
      />

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p>Oferecemos cursos gratuitos e de qualidade para ajudar refugiados a se integrarem ao mercado de trabalho brasileiro e continuarem seu desenvolvimento educacional.</p>
          </div>

          <div className="cursos-grid">
            {cursos.map((curso, index) => (
              <Card 
                key={index}
                icon={curso.icon}
                title={curso.title}
                description={curso.description}
              >
                <div className="curso-info">
                  <p><strong>Duração:</strong> {curso.duration}</p>
                  <p><strong>Nível:</strong> {curso.level}</p>
                </div>
                <button className="btn">Inscreva-se</button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Quem pode se inscrever nos cursos?</h3>
              <p>Todos os refugiados e solicitantes de refúgio residentes no Brasil podem se inscrever em nossos cursos gratuitamente.</p>
            </div>
            <div className="faq-item">
              <h3>Os cursos são realmente gratuitos?</h3>
              <p>Sim, todos os cursos oferecidos pelo Refúgio Solidário são totalmente gratuitos para refugiados.</p>
            </div>
            <div className="faq-item">
              <h3>Preciso ter conhecimentos prévios?</h3>
              <p>A maioria dos cursos é destinada a iniciantes. Verifique os requisitos específicos de cada curso na descrição.</p>
            </div>
            <div className="faq-item">
              <h3>Como são realizadas as aulas?</h3>
              <p>Oferecemos opções presenciais e online, dependendo do curso e da localização do aluno.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cursos;
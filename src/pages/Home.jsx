import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import { FaGraduationCap, FaBook, FaBriefcase, FaHandsHelping } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: <FaGraduationCap />,
      title: "Cursos de Capacitação",
      description: "Aprenda português, desenvolva habilidades profissionais e prepare-se para o mercado de trabalho brasileiro.",
      link: "/cursos"
    },
    {
      icon: <FaBook />,
      title: "Recursos Educacionais",
      description: "Acesso a materiais didáticos, bibliotecas digitais e ferramentas de aprendizagem gratuitas.",
      link: "/recursos"
    },
    {
      icon: <FaBriefcase />,
      title: "Oportunidades de Emprego",
      description: "Conectamos refugiados qualificados com empresas comprometidas com a diversidade e inclusão.",
      link: "/empregos"
    },
    {
      icon: <FaHandsHelping />,
      title: "Apoio Psicossocial",
      description: "Serviços de apoio emocional e orientação para lidar com os desafios da adaptação.",
      link: "/recursos"
    }
  ];

  return (
    <div>
      <Banner 
        title="Bem-vindo ao Refúgio Solidário" 
        subtitle="Educação e capacitação para refugiados no Brasil"
        showButton={true}
        buttonText="Conheça nossos cursos"
        buttonLink="/cursos"
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <Card 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container">
          <h2 className="section-title">Nosso Impacto</h2>
          <div className="impact-stats">
            <div className="stat">
              <div className="number">1.200+</div>
              <div className="label">Refugiados capacitados</div>
            </div>
            <div className="stat">
              <div className="number">35</div>
              <div className="label">Parcerias institucionais</div>
            </div>
            <div className="stat">
              <div className="number">18</div>
              <div className="label">Cursos disponíveis</div>
            </div>
            <div className="stat">
              <div className="number">7</div>
              <div className="label">Idiomas suportados</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">Histórias de Sucesso</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="quote">"O Refúgio Solidário me ajudou a aprender português e conseguir meu primeiro emprego no Brasil. Hoje trabalho como assistente administrativa em uma grande empresa."</div>
              <div className="author">- Amina, refugiada da Síria</div>
            </div>
            <div className="testimonial">
              <div className="quote">"Graças aos cursos de capacitação, pude validar meu diploma e hoje trabalho como enfermeira em um hospital em São Paulo."</div>
              <div className="author">- Carlos, refugiado da Venezuela</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
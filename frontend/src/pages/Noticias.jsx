import React from 'react';
import Banner from '../components/Banner';

const Noticias = () => {
  const noticias = [
    {
      title: "Novo programa de capacitação para mulheres refugiadas",
      date: "15 Out 2023",
      category: "Capacitação",
      excerpt: "Lançamos um novo programa exclusivo para mulheres refugiadas com foco em empreendedorismo e liderança..."
    },
    {
      title: "Parceria com universidade oferece bolsas para refugiados",
      date: "8 Out 2023",
      category: "Educação",
      excerpt: "A Universidade Federal assinou convênio com o Refúgio Solidário para oferecer 50 bolsas de estudo..."
    },
    {
      title: "Workshop de português para iniciantes",
      date: "1 Out 2023",
      category: "Eventos",
      excerpt: "No próximo sábado, realizaremos um workshop gratuito de português básico para refugiados recém-chegados..."
    },
    {
      title: "Refugiados encontram oportunidades no setor de tecnologia",
      date: "25 Set 2023",
      category: "Empregabilidade",
      excerpt: "Empresas de tecnologia estão contratando cada vez mais refugiados qualificados em programação..."
    },
    {
      title: "Campanha arrecada materiais escolares para crianças refugiadas",
      date: "18 Set 2023",
      category: "Campanhas",
      excerpt: "Ajude-nos a garantir o direito à educação de crianças refugiadas. Doe materiais escolares até 30/09..."
    },
    {
      title: "Guia de direitos do refugiado no Brasil é atualizado",
      date: "10 Set 2023",
      category: "Recursos",
      excerpt: "Atualizamos nosso guia completo sobre direitos, deveres e acesso a serviços públicos para refugiados..."
    }
  ];

  return (
    <div>
      <Banner 
        title="Notícias e Atualizações" 
        subtitle="Fique por dentro das novidades do Refúgio Solidário e do universo de apoio a refugiados"
      />

      <section className="section">
        <div className="container">
          <div className="news-filters">
            <button className="btn btn-outline active">Todas</button>
            <button className="btn btn-outline">Capacitação</button>
            <button className="btn btn-outline">Educação</button>
            <button className="btn btn-outline">Empregabilidade</button>
            <button className="btn btn-outline">Eventos</button>
            <button className="btn btn-outline">Campanhas</button>
          </div>

          <div className="news-grid">
            {noticias.map((noticia, index) => (
              <div key={index} className="news-card">
                <div className="news-image">
                  <div className="placeholder-img"></div>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="date">{noticia.date}</span>
                    <span className="category">{noticia.category}</span>
                  </div>
                  <h3>{noticia.title}</h3>
                  <p>{noticia.excerpt}</p>
                  <a href="#" className="read-more">Leia mais →</a>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="btn btn-outline">Anterior</button>
            <button className="btn active">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">Próximo</button>
          </div>
        </div>
      </section>

      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="text">
              <h2>Receba nossas notícias por e-mail</h2>
              <p>Cadastre-se para receber atualizações sobre cursos, eventos e oportunidades.</p>
            </div>
            <div className="form">
              <input type="email" placeholder="Seu melhor e-mail" />
              <button className="btn">Inscrever</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Noticias;
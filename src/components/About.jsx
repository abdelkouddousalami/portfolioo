import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>À Propos</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Je suis Abdelkouddous El Alami, développeur Full-Stack passionné par la création 
            de solutions web innovantes. Diplômé de YouCode (Université Mohammed VI Polytechnique) 
            et titulaire d'un Master en Sciences Juridiques, je combine expertise technique et 
            compréhension approfondie des besoins métier.
          </p>
          <p>
            Mon parcours m'a permis de maîtriser l'ensemble du cycle de développement, de l'analyse 
            des besoins à la mise en production. Je travaille avec des technologies modernes comme 
            Laravel, Spring, Angular et React pour créer des applications performantes et sécurisées.
          </p>
          <p>
            Actuellement disponible en freelance, je collabore avec des entreprises pour transformer 
            leurs idées en produits digitaux de qualité. Mon approche allie rigueur technique, 
            créativité et engagement envers la satisfaction client.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>2+</h3>
            <p>Ans d'Expérience</p>
          </div>
          <div className="stat-card">
            <h3>20+</h3>
            <p>Projets Réalisés</p>
          </div>
          <div className="stat-card">
            <h3>4</h3>
            <p>Langues Parlées</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Dévouement</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

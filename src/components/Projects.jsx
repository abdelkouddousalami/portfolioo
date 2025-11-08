import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "l3ochaq.ma - Plateforme E-commerce Bijoux",
      description: "Plateforme moderne de vente de bijoux avec gestion multi-utilisateurs, système d'achat sécurisé, messagerie instantanée et chatbot IA. Interface responsive avec SEO avancé.",
      technologies: ["Laravel", "MySQL", "React.js", "Bootstrap"],
      github: "#",
      demo: "https://l3ochaq.ma"
    },
    {
      title: "Moteur de Recherche Avancé",
      description: "Système de recherche intelligent avec filtres multiples (type, matériau, prix). Intégration panier et paiement sécurisé multi-options avec personnalisation bijoux sur mesure.",
      technologies: ["PHP", "Laravel", "JavaScript", "API RESTful"],
      github: "#",
      demo: "#"
    },
    {
      title: "Tableau de Bord Administrateur",
      description: "Interface interactive complète avec statistiques en temps réel, gestion des stocks, suivi des commandes et analytics avancés pour l'e-commerce.",
      technologies: ["Angular", "Spring", "PostgreSQL", "Chart.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "Application Web Full-Stack",
      description: "Développement complet avec authentification sécurisée, validation des données, API RESTful et interface responsive selon les meilleures pratiques.",
      technologies: ["Java", "Laravel", "Angular", "MySQL"],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projets Réalisés</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">
                  <span>GitHub</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a href={project.demo} className="project-link">
                  <span>Demo Live</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

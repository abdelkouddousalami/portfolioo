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
      title: "Le7rayfi - Plateforme Marocaine des Artisans",
      description: "Première plateforme digitale au Maroc connectant artisans et clients. Offre des services de formation professionnelle, opportunités d'emploi, promotion des services avec système de réservation en ligne, comparaison de prix transparente et accès à des artisans certifiés dans toutes les villes.",
      technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "SEO"],
      github: "#",
      demo: "https://www.le7rayfi.com/"
    },
    {
      title: "Culturoo - Plateforme d'Hospitalité Marocaine",
      description: "Plateforme complète connectant les voyageurs internationaux avec des familles marocaines authentiques. Système de réservation en temps réel, messagerie instantanée, vérification d'identité, tableau de bord administrateur et SEO avancé avec génération de sitemap.",
      technologies: ["Laravel 12", "PHP 8.2+", "TailwindCSS 4", "Alpine.js", "SQLite", "Vite"],
      github: "https://github.com/abdelkouddousalami/cultaroo.git",
      demo: "#"
    },
    {
      title: "Système de Télé-Expertise Médicale",
      description: "Plateforme de coordination entre médecins généralistes et spécialistes pour optimiser le parcours patient. Gestion complète des consultations, file d'attente intelligente, système de réservation de créneaux et télé-expertise synchrone/asynchrone avec authentification sécurisée et protection CSRF.",
      technologies: ["Java", "Jakarta EE", "JPA/Hibernate", "JSP/JSTL", "Tomcat", "Maven", "JUnit/Mockito"],
      github: "https://github.com/abdelkouddousalami/t-l--expertise-m-dicale.git",
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

import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "FX Deals - Data Warehouse System",
      description: "Robust FX (Foreign Exchange) transaction management system with complete data validation, duplicate prevention, advanced error handling, and comprehensive unit testing. Docker deployment with PostgreSQL, detailed logging, and secure REST API.",
      technologies: ["Spring Boot", "Java", "PostgreSQL", "Docker", "JUnit", "Maven", "REST API"],
      github: "https://github.com/abdelkouddousalami/FX-deals.git",
      demo: "#"
    },
    {
      title: "l3ochaq.ma - Jewelry E-commerce Platform",
      description: "Modern jewelry sales platform with multi-user management, secure purchasing system, instant messaging, and AI chatbot. Responsive interface with advanced SEO.",
      technologies: ["Laravel", "MySQL", "React.js", "Bootstrap"],
      github: "#",
      demo: "https://l3ochaq.ma"
    },
    {
      title: "Le7rayfi - Moroccan Artisan Platform",
      description: "First digital platform in Morocco connecting artisans and clients. Offers professional training services, job opportunities, service promotion with online booking system, transparent price comparison, and access to certified artisans in all cities.",
      technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "SEO"],
      github: "#",
      demo: "https://www.le7rayfi.com/"
    },
    {
      title: "Culturoo - Moroccan Hospitality Platform",
      description: "Complete platform connecting international travelers with authentic Moroccan families. Real-time booking system, instant messaging, identity verification, admin dashboard, and advanced SEO with sitemap generation.",
      technologies: ["Laravel 12", "PHP 8.2+", "TailwindCSS 4", "Alpine.js", "SQLite", "Vite"],
      github: "https://github.com/abdelkouddousalami/cultaroo.git",
      demo: "#"
    },
    {
      title: "Medical Tele-Expertise System",
      description: "Coordination platform between general practitioners and specialists to optimize patient journey. Complete consultation management, intelligent queue system, appointment slot booking, and synchronous/asynchronous tele-expertise with secure authentication and CSRF protection.",
      technologies: ["Java", "Jakarta EE", "JPA/Hibernate", "JSP/JSTL", "Tomcat", "Maven", "JUnit/Mockito"],
      github: "https://github.com/abdelkouddousalami/t-l--expertise-m-dicale.git",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Completed Projects</h2>
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
                  <span>Live Demo</span>
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

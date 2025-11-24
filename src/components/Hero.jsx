import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-label">
            <span className="label-indicator">●</span>
            <span className="label-text">AVAILABLE FOR WORK</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Abdelkouddous El Alami</span>
          </h1>
          <p className="hero-subtitle">Full-Stack Developer</p>
          <p className="hero-description">
            Full-stack developer specialized in creating exceptional web applications. 
            I transform complex problems into elegant solutions using modern technologies, 
            clean code, and user-centered design principles.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={scrollToContact}>
              <span>Start a Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="secondary-btn" onClick={scrollToProjects}>
              <span>View My Projects</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <span className="window-title">developer.config.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="line-number">01</span>
                <span className="code-keyword">export default</span> <span className="code-bracket">{'{'}</span>
              </div>
              <div className="code-line">
                <span className="line-number">02</span>
                <span className="code-indent">  </span><span className="code-property">name</span><span className="code-bracket">:</span> <span className="code-string">"Abdelkouddous El Alami"</span><span className="code-bracket">,</span>
              </div>
              <div className="code-line">
                <span className="line-number">03</span>
                <span className="code-indent">  </span><span className="code-property">role</span><span className="code-bracket">:</span> <span className="code-string">"Full-Stack Developer"</span><span className="code-bracket">,</span>
              </div>
              <div className="code-line">
                <span className="line-number">04</span>
                <span className="code-indent">  </span><span className="code-property">skills</span><span className="code-bracket">:</span> <span className="code-bracket">[</span>
              </div>
              <div className="code-line">
                <span className="line-number">05</span>
                <span className="code-indent">    </span><span className="code-string">"Java"</span><span className="code-bracket">,</span> <span className="code-string">"PHP"</span><span className="code-bracket">,</span> <span className="code-string">"JavaScript"</span><span className="code-bracket">,</span>
              </div>
              <div className="code-line">
                <span className="line-number">06</span>
                <span className="code-indent">    </span><span className="code-string">"Laravel"</span><span className="code-bracket">,</span> <span className="code-string">"React"</span><span className="code-bracket">,</span> <span className="code-string">"Angular"</span>
              </div>
              <div className="code-line">
                <span className="line-number">07</span>
                <span className="code-indent">  </span><span className="code-bracket">],</span>
              </div>
              <div className="code-line">
                <span className="line-number">08</span>
                <span className="code-indent">  </span><span className="code-property">contact</span><span className="code-bracket">:</span> <span className="code-string">"abdoalami.ru@gmail.com"</span><span className="code-bracket">,</span>
              </div>
              <div className="code-line">
                <span className="line-number">09</span>
                <span className="code-indent">  </span><span className="code-property">status</span><span className="code-bracket">:</span> <span className="code-string">"available"</span>
              </div>
              <div className="code-line">
                <span className="line-number">10</span>
                <span className="code-bracket">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="scroll-text">Scroll down</div>
        <div className="scroll-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero

import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Abdelkouddous El Alami, a Full-Stack developer passionate about creating 
            innovative web solutions. Graduate from YouCode (Mohammed VI Polytechnic University) 
            and holder of a Master's degree in Legal Sciences, I combine technical expertise with 
            deep understanding of business needs.
          </p>
          <p>
            My journey has allowed me to master the entire development cycle, from requirements 
            analysis to production deployment. I work with modern technologies like Laravel, 
            Spring, Angular, and React to create high-performance and secure applications.
          </p>
          <p>
            Currently available as a freelancer, I collaborate with companies to transform 
            their ideas into quality digital products. My approach combines technical rigor, 
            creativity, and commitment to client satisfaction.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>4</h3>
            <p>Languages Spoken</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Dedication</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

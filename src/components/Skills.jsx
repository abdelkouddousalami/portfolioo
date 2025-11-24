import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "PHP", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "GO", level: 70 }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "Spring", level: 85 },
        { name: "Angular", level: 85 },
        { name: "React.js", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQLite", level: 75 }
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git / Docker", level: 85 },
        { name: "Jenkins / GitLab CI/CD", level: 80 },
        { name: "Figma / Photoshop", level: 75 },
        { name: "Jira / Postman", level: 90 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

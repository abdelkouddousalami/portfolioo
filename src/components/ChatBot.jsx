import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Bonjour! 👋 Je suis l'assistant virtuel d'Abdelkouddous. Posez-moi des questions sur ses compétences, son expérience ou ses projets!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base about Abdelkouddous
  const knowledgeBase = {
    name: 'Abdelkouddous el alami',
    title: 'Développeur Full-Stack',
    contact: {
      phone: '+212 6 11 39 45 86',
      email: 'abdoalami.ru@gmail.com',
      linkedin: 'EL ALAMI Abdelkouddous',
      github: 'abdelkouddousalami'
    },
    languages: {
      programming: ['JAVA', 'PHP', 'GO', 'C', 'JAVASCRIPT'],
      spoken: {
        'Arabe': 'Maternelle',
        'Français': 'Professionnel',
        'Anglais': 'Professionnel',
        'Allemand': 'Bien'
      }
    },
    skills: {
      frameworks: ['Laravel', 'Symfony', 'Spring', 'Angular', 'React.js', 'Node.js', 'ExpressJS'],
      databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
      tools: ['Jira', 'Git', 'Postman', 'lucidChart', 'Docker', 'Jenkins', 'GitLab CI/CD', 'Prometheus'],
      design: ['Figma', 'Photoshop', 'TailwindCSS', 'Bootstrap'],
      conception: ['ERD', 'UML']
    },
    experience: [
      {
        role: 'Full-Stack Developer | Freelance',
        period: 'Sep 2024 – Nov 2024',
        tasks: [
          "Développement d'un moteur de recherche avec filtres avancés",
          "Intégration d'un panier et système de paiement sécurisé",
          "Module de personnalisation pour bijoux sur mesure",
          "Tableau de bord interactif avec statistiques"
        ]
      },
      {
        company: 'Webcinq',
        role: 'Développeur Full Stack Stagiaire',
        period: 'Mai 2025 – Juillet 2025',
        tasks: [
          "Développement d'applications web avec PHP, Laravel et JavaScript",
          "Conception et consommation d'API RESTful",
          "Collaboration en équipe Agile",
          "Optimisation des performances et interfaces responsives"
        ]
      },
      {
        company: 'Webcinq',
        role: 'Développeur Full Stack | Contrat Freelance',
        period: 'Août 2025 – November 2025',
        tasks: [
          "Projets web sur mesure avec Java, Laravel, JavaScript",
          "Gestion du cycle complet du développement",
          "Authentification et sécurité"
        ]
      }
    ],
    projects: [
      {
        name: 'l3ochaq.ma',
        description: 'Plateforme e-commerce bijoux',
        features: [
          'Gestion des utilisateurs (vendeurs, clients, administrateurs)',
          'Module d\'achat sécurisé en temps réel',
          'Messagerie instantanée et chatbot intelligent',
          'Tableau de bord administrateur complet',
          'Interface responsive et SEO avancé'
        ],
        technologies: ['Laravel', 'MySQL', 'React.js', 'Bootstrap']
      }
    ],
    education: [
      {
        degree: 'Développeur full-stack Java/Angular',
        school: 'YouCode | Université Mohammed VI Polytechnique',
        period: '2022 – 2024'
      },
      {
        degree: 'Master en Sciences Juridiques',
        school: 'Faculté sidi mohamed ben abdellah - FES',
        period: '2019 – 2022'
      },
      {
        degree: 'Licence en Sciences Juridiques',
        school: 'Faculté sidi mohamed ben abdellah - FES',
        period: '2019 – 2022'
      }
    ],
    activities: [
      'Membre du BDE - YouCode (2024-2025)',
      'Délégué de promotion - YouCode (2024-2025)'
    ]
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Greetings
    if (message.match(/bonjour|salut|hello|hi|hey/)) {
      return "Bonjour! Je peux vous renseigner sur Abdelkouddous. Vous pouvez me demander ses compétences, son expérience, ses projets ou ses coordonnées. 😊";
    }

    // Contact information
    if (message.match(/contact|téléphone|email|mail|linkedin|github|joindre|contacter/)) {
      return `📞 **Contact d'Abdelkouddous:**\n\n` +
        `• Téléphone: ${knowledgeBase.contact.phone}\n` +
        `• Email: ${knowledgeBase.contact.email}\n` +
        `• LinkedIn: ${knowledgeBase.contact.linkedin}\n` +
        `• GitHub: ${knowledgeBase.contact.github}`;
    }

    // Skills/Competences
    if (message.match(/compétence|skill|technologie|framework|outil|langage/)) {
      return `💻 **Compétences techniques:**\n\n` +
        `**Langages:** ${knowledgeBase.languages.programming.join(', ')}\n\n` +
        `**Frameworks:** ${knowledgeBase.skills.frameworks.join(', ')}\n\n` +
        `**Bases de données:** ${knowledgeBase.skills.databases.join(', ')}\n\n` +
        `**Outils:** ${knowledgeBase.skills.tools.slice(0, 5).join(', ')}...`;
    }

    // Experience
    if (message.match(/expérience|travail|poste|entreprise|webcinq|freelance/)) {
      const exp = knowledgeBase.experience[0];
      return `💼 **Expérience récente:**\n\n` +
        `**${exp.role}**\n` +
        `${exp.period}\n\n` +
        `• ${exp.tasks.slice(0, 3).join('\n• ')}\n\n` +
        `Il a aussi travaillé chez Webcinq en tant que stagiaire et freelance!`;
    }

    // Projects
    if (message.match(/projet|réalisation|portfolio|l3ochaq|e-commerce/)) {
      const project = knowledgeBase.projects[0];
      return `🚀 **Projet principal: ${project.name}**\n\n` +
        `${project.description}\n\n` +
        `**Technologies:** ${project.technologies.join(', ')}\n\n` +
        `**Fonctionnalités clés:**\n` +
        `• ${project.features.slice(0, 3).join('\n• ')}`;
    }

    // Education
    if (message.match(/formation|étude|diplôme|éducation|youcode|université/)) {
      return `🎓 **Formation:**\n\n` +
        `• Développeur full-stack Java/Angular\n  YouCode | UMVI (2022-2024)\n\n` +
        `• Master en Sciences Juridiques\n  Faculté Sidi Mohamed Ben Abdellah`;
    }

    // Languages (spoken)
    if (message.match(/langue|parle|arabe|français|anglais|allemand/)) {
      return `🌍 **Langues:**\n\n` +
        `• Arabe: Maternelle\n` +
        `• Français: Professionnel\n` +
        `• Anglais: Professionnel\n` +
        `• Allemand: Bien`;
    }

    // Who is he
    if (message.match(/qui|présente|c'est qui|connais/)) {
      return `👨‍💻 **Abdelkouddous el alami**\n\n` +
        `Développeur Full-Stack passionné avec une expertise en:\n` +
        `• Développement web (Java, PHP, JavaScript)\n` +
        `• Frameworks modernes (Laravel, Spring, React, Angular)\n` +
        `• E-commerce et solutions sur mesure\n\n` +
        `Actuellement freelance et formé chez YouCode!`;
    }

    // Thank you
    if (message.match(/merci|thank/)) {
      return "Avec plaisir! N'hésitez pas si vous avez d'autres questions sur Abdelkouddous! 😊";
    }

    // Default response
    return `Je peux vous aider avec:\n\n` +
      `• 💼 Son expérience professionnelle\n` +
      `• 💻 Ses compétences techniques\n` +
      `• 🚀 Ses projets réalisés\n` +
      `• 📞 Ses coordonnées\n` +
      `• 🎓 Sa formation\n\n` +
      `Posez-moi une question spécifique!`;
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue
    };
    setMessages(prev => [...prev, userMessage]);

    // Get bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getBotResponse(inputValue)
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Quelles sont ses compétences?",
    "Son expérience professionnelle?",
    "Ses projets réalisés?",
    "Comment le contacter?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <div className="chatbot-container">
      {/* Chat button */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        <span className="chatbot-icon">
          {isOpen ? '' : ''}
        </span>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">
                <img src="/image-removebg-preview.png" alt="Logo" />
              </div>
              <div className="chatbot-header-text">
                <h3>Assistant</h3>
                <span className="chatbot-status">
                  <span className="status-dot"></span> En ligne
                </span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <div className="message-content">
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          {messages.length <= 2 && (
            <div className="quick-questions">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="quick-question-btn"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chatbot-input-container">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Posez votre question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="chatbot-send-btn"
              onClick={handleSendMessage}
              disabled={inputValue.trim() === ''}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

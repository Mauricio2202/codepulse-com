import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import DiscordImage from '../img/discord.png';
import UsuariosImage from '../img/usuarios.png';
import CursosImage from '../img/cursos.png';
import CursoJava from '../img/Java-logo.png';
import { FaSun, FaMoon, FaTerminal, FaDiscord, FaUsers, FaBook, FaCode } from 'react-icons/fa';

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCommand, setActiveCommand] = useState(null);
  const [typingComplete, setTypingComplete] = useState(false);

  // Efecto para animación de escritura
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      title: "React desde Cero",
      description: "Domina React con hooks, context API, Redux y pruebas unitarias.",
      color: "#61dafb",
      command: "react_course",
      icon: <FaCode />
    },
    {
      title: "Java desde Cero",
      description: "Aprende Java desde cero con Interfaces de Usuario.",
      color: "#5382a1",
      command: "java_course",
      icon: <FaCode />
    },
    {
      title: "C# .NET Framework",
      description: "Desarrollo profesional con C# y ASP.NET Core.",
      color: "#9b4f96",
      command: "csharp_course",
      icon: <FaCode />
    },
    {
      title: "Programación en C++",
      description: "Desde sintaxis básica hasta creación de programas complejos.",
      color: "#00599c",
      command: "cpp_course",
      icon: <FaCode />
    },
    {
      title: "SQL desde Cero",
      description: "Consultas básicas y lógica de consultas avanzadas",
      color: "#f29111",
      command: "sql_course",
      icon: <FaCode />
    },
    {
      title: "Ingeniería de Software",
      description: "Patrones de diseño, arquitectura y metodologías ágiles. PREMIUM",
      color: "#6fffe9",
      command: "software_eng",
      icon: <FaCode />
    }
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleCommandHover = (command) => {
    setActiveCommand(command);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo-container">
            <FaTerminal className="logo-icon" />
            <h1>CodePulse</h1>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            <span>{darkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="typing-container">
            <span className="command-prompt">$</span>
            <span className={`typing-text ${typingComplete ? 'complete' : ''}`}>
              {typingComplete ? 'Bienvenido a CodePulse' : 'Bienvenido a CodePulse'}
            </span>
            {!typingComplete && <span className="typing-cursor">|</span>}
          </div>
          <p className="hero-subtitle">Transformamos principiantes en expertos</p>
        </div>
      </section>

      {/* Novedades Section */}
      <section className="section-container">
        <div className="section-header">
          <div className="command-prompt">$</div>
          <h2 className="section-title">novedades --list</h2>
        </div>

        <div className="course-presentation">
          <img src={CursoJava} alt="Java Course" className="course-logo" />
          <div className="course-info">
            <h3>Curso de Java disponible para inscripción</h3>
            <p>Aprende desarrollo backend con Java y Spring Boot desde cero</p>
            <a href="https://api.whatsapp.com/send/?phone=525636063000&text&type=phone_number&app_absent=0" 
               className="action-btn primary">
              Contactar al Instructor
            </a>
          </div>
        </div>

        <div className="cards-grid">
          <div className={`info-card ${activeCommand === 'community_update' ? 'active' : ''}`}
               onMouseEnter={() => handleCommandHover('community_update')}
               onMouseLeave={() => setActiveCommand(null)}>
            <div className="card-icon"><FaDiscord /></div>
            <h3>$ community_update</h3>
            <p>Lives en Discord gratuitos en el horario de 7:00 p.m. Hora México</p>
            <a href="https://discord.gg/NKReERuh" className="action-btn">
              <FaDiscord /> Unirse a Discord
            </a>
          </div>

          <div className={`info-card ${activeCommand === 'participation_upgrade' ? 'active' : ''}`}
               onMouseEnter={() => handleCommandHover('participation_upgrade')}
               onMouseLeave={() => setActiveCommand(null)}>
            <div className="card-icon"><FaUsers /></div>
            <h3>$ participation_upgrade</h3>
            <p>Colabora en proyectos con la comunidad</p>
            <img src={UsuariosImage} alt="Comunidad" className="card-image" />
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section className="section-container">
        <div className="section-header">
          <div className="command-prompt">$</div>
          <h2 className="section-title">cursos --list --premium</h2>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} 
                 className={`course-card ${activeCommand === course.command ? 'active' : ''}`}
                 style={{ '--course-color': course.color }}
                 onMouseEnter={() => handleCommandHover(course.command)}
                 onMouseLeave={() => setActiveCommand(null)}>
              <div className="course-icon">{course.icon}</div>
              <h3>$ {course.command}</h3>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cursos Unificados */}
      <section className="section-container unified-section">
        <div className="unified-card">
          <div className="section-header">
            <div className="command-prompt">$</div>
            <h2 className="section-title">unified_courses</h2>
          </div>
          <p>Enfocados en Frameworks completos con calidad elevada.</p>
          <img src={CursosImage} alt="Cursos" className="unified-image" />
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} CodePulse | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Home;
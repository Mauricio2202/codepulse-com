import React, { useEffect, useState } from 'react';
import '../css/Home.css';
import DiscordImage from '../img/discord.png';
import UsuariosImage from '../img/usuarios.png';
import CursosImage from '../img/cursos.png';

function Home() {

    const [activeCommand, setActiveCommand] = useState(null);
    const [matrixRain, setMatrixRain] = useState([]);

    useEffect(() => {
        // Efecto Matrix Rain
        const chars = "01";
        const columns = Math.floor(window.innerWidth / 20);
        const newMatrix = Array(columns).fill().map((_, i) => ({
            position: i * 20,
            speed: 5 + Math.random() * 10,
            chars: Array(20).fill().map(() => chars[Math.floor(Math.random() * chars.length)]),
            opacity: Math.random() * 0.2
        }));
        setMatrixRain(newMatrix);

        // Efecto de terminal typing
        const elements = document.querySelectorAll('.terminal-text');
        elements.forEach(el => {
            const text = el.textContent;
            el.textContent = '';
            
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    el.querySelector('.cursor')?.classList.add('active');
                }
            }, 20);
        });

        // Animación Matrix
        const interval = setInterval(() => {
            setMatrixRain(prev => prev.map(col => ({
                ...col,
                chars: [...col.chars.slice(1), chars[Math.floor(Math.random() * chars.length)]],
                opacity: Math.random() < 0.1 ? Math.random() * 0.2 : col.opacity
            })));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const courses = [
        {
            title: "React desde Cero",
            description: "Domina React con hooks, context API, Redux y pruebas unitarias.",
            color: "#61dafb",
            command: "react_course"
        },
        {
            title: "Java desde Cero",
            description: "Aprende Java desde cero con Interfaces de Usuario.",
            color: "#5382a1",
            command: "java_course"
        },
        {
            title: "C# .NET Framework",
            description: "Desarrollo profesional con C# y ASP.NET Core.",
            color: "#9b4f96",
            command: "csharp_course"
        },
        {
            title: "Programación en C++",
            description: "Desde sintaxis básica hasta creación de programas complejos.",
            color: "#00599c",
            command: "cpp_course"
        },
        {
            title: "SQL desde Cero",
            description: "Consultas básicas y lógica de consultas avanzadas",
            color: "#f29111",
            command: "sql_course"
        },
        {
            title: "Ingeniería de Software",
            description: "Patrones de diseño, arquitectura y metodologías ágiles. PREM",
            color: "#6fffe9",
            command: "software_eng"
        }
    ];

    const handleCommandHover = (command) => {
        setActiveCommand(command);
    };

    

    return (
        <div className='matrix-container'>
            {/* Efecto Matrix Rain */}
            {matrixRain.map((col, i) => (
                <div 
                    key={i} 
                    className="matrix-column" 
                    style={{ 
                        left: `${col.position}px`,
                        opacity: col.opacity,
                        animation: `matrix-rain ${col.speed}s linear infinite`
                    }}
                >
                    {col.chars.map((char, j) => (
                        <span key={j} style={{ 
                            color: j === col.chars.length - 1 ? '#fff' : '#0f0',
                            opacity: 1 - (j / col.chars.length)
                        }}>
                            {char}
                        </span>
                    ))}
                </div>
                
            ))}
        

            {/* Contenido principal */}
            <div className='terminal-window'>
                <div className='terminal-header'>
                    <div className='terminal-buttons'>
                        <span className='terminal-btn close'></span>
                        <span className='terminal-btn minimize'></span>
                        <span className='terminal-btn maximize'></span>
                    </div>
                    <span className='terminal-title'>user@codepulse: ~</span>
                </div>
                
                <div className='terminal-body'>
                    <div className='terminal-line'>
                        <span className='terminal-prompt'>$&gt;</span>
                        <span className='terminal-text'> Bienvenido a <span className='glitch' data-text="CodePulse">CodePulse</span><span className='cursor'></span></span>
                    </div>
                    
                    <div className='terminal-line'>
                        <span className='terminal-prompt'>$&gt;</span>
                        <span className='terminal-text'> Transformamos principiantes en expertos<span className='cursor'></span></span>
                    </div>

                    {/* Sección Novedades */}
                    <div className='terminal-line command-section'>
                        <span className='terminal-prompt'>$&gt;</span>
                        <span className='terminal-text'> novedades --list<span className='cursor'></span></span>
                    </div>

                    <div className='terminal-cards'>
                        <div 
                            className={`terminal-card ${activeCommand === 'community_update' ? 'active' : ''}`}
                            onMouseEnter={() => handleCommandHover('community_update')}
                            onMouseLeave={() => setActiveCommand(null)}
                        >
                            <div className='terminal-command'>$ community_update</div>
                            <div className='terminal-content'>
                                <p>Lives en Discord gratuitos en el horario de 7:00 p.m. Hora México - Solo faltan días</p>
                                <a href="https://discord.gg/NKReERuh" className='terminal-btn-action'>
                                    <img src={DiscordImage} alt="Discord" />
                                    <span>Unirse a Discord</span>
                                </a>
                            </div>
                            <div className='terminal-decoration'>// 01000100 01101001 01110011 01100011 01101111 01110010 01100100</div>
                        </div>

                        <div 
                            className={`terminal-card ${activeCommand === 'participation_upgrade' ? 'active' : ''}`}
                            onMouseEnter={() => handleCommandHover('participation_upgrade')}
                            onMouseLeave={() => setActiveCommand(null)}
                        >
                            <div className='terminal-command'>$ participation_upgrade</div>
                            <div className='terminal-content'>
                                <p>Colabora en proyectos con la comunidad.</p>
                                <img src={UsuariosImage} alt="Comunidad" className='terminal-img' />
                            </div>
                            <div className='terminal-decoration'>// 0x43 0x6F 0x6C 0x61 0x62 0x6F 0x72 0x61</div>
                        </div>
                    </div>

                    {/* Sección Cursos */}
                    <div className='terminal-line command-section'>
                        <span className='terminal-prompt'>$&gt;</span>
                        <span className='terminal-text'> cursos --list --premium<span className='cursor'></span></span>
                    </div>

                    <div className='terminal-grid'>
                        {courses.map((course, index) => (
                            <div 
                                key={index} 
                                className={`terminal-card course-card ${activeCommand === course.command ? 'active' : ''}`}
                                style={{ '--course-color': course.color }}
                                onMouseEnter={() => handleCommandHover(course.command)}
                                onMouseLeave={() => setActiveCommand(null)}
                            >
                                <div className='terminal-command'>$ {course.command}</div>
                                <div className='terminal-content'>
                                    <h3>{course.title}</h3>
                                    <p>{course.description}</p>
                                </div>
                                <div className='terminal-decoration'>// {course.command.toUpperCase()}</div>
                                <div className='course-hover-effect'></div>
                            </div>
                        ))}
                    </div>

                    {/* Sección Unificada */}
                    <div className='terminal-card unified-card'>
                        <div className='terminal-command'>$ unified_courses</div>
                        <div className='terminal-content'>
                            <p>Enfocados en Frameworks completos con calidad elevada.</p>
                            <img src={CursosImage} alt="Cursos" className='terminal-img' />
                        </div>
                        <div className='terminal-decoration'>// if (knowledge) &#123; success = true; &#125;</div>
                    </div>

                    {/* Línea final */}
                    <div className='terminal-line'>
                        <span className='terminal-prompt'>$&gt;</span>
                        <span className='terminal-text'> <span className='cursor'></span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
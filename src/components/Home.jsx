import React from 'react';
import '../css/Home.css';
import DiscordImage from '../img/Discord.png';
import UsuariosImage from '../img/usuarios.png';
import CursosImage from '../img/cursos.png';

function Home() {
    return (
        <div className='containerHome'>
            <h1 className='titleHome'>En <span className='stylingLiryc'>CodePulse</span> entendemos tu software</h1>

            <h2 className='titleSubtitle'><span className='stylingLiryc'>¿</span>Cuáles son las novedades de CodePulse para todos ustedes<span className='stylingLiryc'>?</span></h2>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>

            <article className='art'>
                <div className="card">
                    <h2 className='titleCard'>Mejora en la actividad de la Comunidad</h2>
                    <p className='descriptionCard'>
                        La comunidad estará invitada a entrar en los lives en Discord de forma gratuita en un horario específico. La finalidad es interactuar más entre todos nosotros y no solo desde el medio que hemos utilizado desde hace aproximadamente 2 años que ha sido WhatsApp. <br />

                        <a href="https://discord.gg/NKReERuh">
                            <img src={ DiscordImage } alt="discord" className='imageSocial' />
                        </a>
                    </p>
                </div>
                <div className='invisible'></div>
                <div className="cardDos">
                    <h2 className='titleCard'>Tu participación ahora cuenta</h2>
                    <p className='descriptionCard'>
                        El CEO de la comunidad te invita a colaborar a proyectos en colaborativo con el resto de la comunidad, dichas reuniones de trabajo se deben realizar en las siguientes dos plataformas que quedarán a elección de la comunidad: Discord o Microsft Teams. <br />
                        <img src={ UsuariosImage } alt="comunidad" className='imageSocial' />
                    </p>
                </div>
            </article>
            <div className='invisible'></div>

            <h1 className='titleHome'>Lo que muchos nos piden: <span className='stylingLiryc'>Cursos</span></h1>
            <article className="art">
                <div className="cardThree">
                    <h2 className='titleCard'>Cursos unificados</h2>
                    <p className='descriptionCard'>
                        Los cursos que vamos a ofrecer se van a unificar en un solo Framework, es decir, no nos enfocaremos completamente en aprender tecnologías como <span className='stylingLiryc'>JavaScript</span>, <span className="stylingLiryc">Python</span> o <span className="stylingLiryc">Java</span> desde cero, ya nos centraremos en ofrecer Frameworks de forma completa y con una calidad más elevada. Por lo tu participación importa.<br />
                        <img src={ CursosImage } alt="cursos" className='imageSocial' />
                    </p>
                </div>
                <br /><br /><br />
            </article>
        </div>
    )
}

export default Home

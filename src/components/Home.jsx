import '../css/Home.css';
import ChinitaImg from '../assets/chinita.png';
import Sun from '../assets/sun.png'
import CodeServiceUno from '../assets/code_service_1.png'
import TesterServiceDos from '../assets/tester_service_2.png'
import ClasesServiceDos from '../assets/clases_service_3.png'
import RecursosServiceDos from '../assets/recursos_service_4.png'

function Home() {

  return (
    <div>
      <div className='container__header'>
        <img src={ Sun } alt="sun" className='sun__img' />
        <h1>CodePulse Community</h1>
        <i><p className='phylosophy'>"Analiza el problema. Modela el sistema. Diseña la arquitectura. Despliega con pruebas. <br /> Aprende del fallo.
        Corrige con evidencia. Y escala con visión."</p></i>
        <i><p className='text__phylosophy'>- Filosofía de CodePulse Community</p></i>
        <h2>Únete a la comunidad y descúbre <br />
        lo que tenemos para ti.</h2>
        <a href="https://chat.whatsapp.com/GpZP3i6ePsgErmukEFcJl5">
        <button className='btnUnirme'>Unirme</button><br />
        </a>

        <img src={ ChinitaImg } alt="chineseimg" className='chinese__img' />
      </div>

      <section className='container__section__services'>
        <h1 className='text__services'>¿Qué te ofrecemos en esta comunidad?</h1>
        <article>
          <div className="container__service__div">
            <img src={ CodeServiceUno } alt="code__service" className='image__service__1' />
          </div>
          <h2 className='text__service__1'>Te ayudamos con los <br /> errores en tu código.</h2>
        </article>
        
        <article>
          <h2 className='text__service__2'>Testeamos tu <br /> proyecto con prácticas <br /> profesionales.</h2>
          <div className="container__service__div">
            <img src={ TesterServiceDos } alt="tester__service" className='image__service__1' />
          </div>
        </article>

        <article>
          <div className="container__service__div">
            <img src={ ClasesServiceDos } alt="clases__service" className='image__service__1' />
          </div>
          <h2 className='text__service__3'>Asiste a las clases <br /> gratuitas de categoría <br /> técnica.</h2>
        </article>

        <article>
          <h2 className='text__service__2'>Adquiere recursos de <br /> categoría premium <br /> para tu aprendizaje. </h2>
          <div className="container__service__div">
            <img src={ RecursosServiceDos } alt="tester__service" className='image__service__4' />
          </div>
        </article>
      </section>
    </div>
  )

}

export default Home;
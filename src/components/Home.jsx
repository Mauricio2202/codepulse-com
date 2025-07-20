import '../css/Home.css';
import ChinitaImg from '../assets/chinita.png';
import Sun from '../assets/sun.png'
import DemonSlayer from '../assets/demon_slayer.png';

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
    </div>
  )

}

export default Home;
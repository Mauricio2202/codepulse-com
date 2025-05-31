import React from 'react'
import '../css/Home.css'

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
                </div>
            </article>
        </div>
    )
}

export default Home

import React from 'react';
import '../styles/Home.css';
import siembra from '../images/siembraArboles.jpeg';
import caminatas from '../images/caminatas.jpeg';
import donacion from '../images/donacion.avif';
import limpieza from '../images/limpiezaRios.jpg';
import Carrusel from '../components/carrusel';

function Home() {
  return (
    <div className='miHome'>

      <div className="contenedorActividades">
          <h2 className="tituloActividades">¡ Participa y contribuye al cuidado del medio ambiente   ¡</h2>
          <div className="contenedorCaminatas">
            <img src={caminatas} alt="caminatas" className='imagenCaminata' />
            <h4 className="tituloCaminata">Camina y disfruta de la naturaleza</h4>
          </div>
          <div className="contenedorSiembra">
            <img src={siembra} alt="siembra de arboles" className='imagenSiembra' />
            <h4 className="tituloSiembra">Siembra con nosotros</h4>
          </div>
          <div className="contenedorDonacion">
            <img src={donacion} alt="donacion" className='imagenDonacion' />
            <h4 className="tituloDonacion">Dona y contribuye a la disminucion de contaminacion</h4>
          </div>
          <div className="contenedorLimpieza">
            <img src={limpieza} alt="limpieza de rios" className='imagenLimpieza' />
            <h4 className="tituloLimpieza">Limpiemos los rios y cuidemos nuestro recurso mas valioso</h4>
          </div>
         
      </div>

      <div className="contenedorInfoPrincipal">
          <Carrusel/>
          <div className='contenedorTextoHome'>
            <h1 className="tituloHome">Sostenibilidad</h1>
            <p className="parrafoSostenibilidad">Los Objetivos de Desarrollo Sostenible (ODS), adoptados por la ONU en 2015, buscan poner fin a la pobreza, proteger el planeta y garantizar paz y 
              prosperidad para todos hacia 2030. Compuestos por 17 objetivos interconectados, reconocen la necesidad de equilibrar la sostenibilidad social, económica y ambiental. Se enfocan en erradicar la pobreza, el hambre, el sida y la discriminación, 
              especialmente contra mujeres y niñas. Lograr los ODS requiere la creatividad, el conocimiento, la tecnología y los recursos financieros de toda la sociedad.
            </p>
            <h2 className='subtituloHome'>¿Que esta haciendo Cali?</h2>
            <p className="parrafoCali">La Alcaldía de Santiago de Cali trabaja en cumplir los primeros cinco Objetivos de Desarrollo Sostenible (ODS). Estos objetivos incluyen reducir la pobreza, 
              erradicar el hambre y la desnutrición, garantizar una vida sana, promover la educación inclusiva y alcanzar la igualdad de género. 
              Para ello, 12 organismos municipales, como las Secretarías de Bienestar Social, Salud Pública y Educación, entre otras, llevan a cabo diversas acciones y programas. Estas iniciativas buscan reducir la pobreza,
              asegurar el acceso a alimentos suficientes, mejorar la salud infantil, garantizar la educación de calidad y eliminar la violencia contra mujeres y niñas. La colaboración de estos organismos es crucial para responder a estos desafíos y avanzar hacia un desarrollo sostenible en la ciudad.
            </p>

          </div>
      </div>
    </div>
  )
}

export default Home
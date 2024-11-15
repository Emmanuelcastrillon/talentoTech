import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div>
        <div className="card text-center">
  <div className="card-body">
    <h5 className="card-title">Cali pachanguero y Sostenible</h5>
    <p className="card-text">Contactanos en nuestras redes sociales.</p>
    <div className="contenedorRedes">
          <a target='_blank' href="https://www.facebook.com/share/Rieq2o3Xi8fckhij/?mibextid=LQQJ4d" ><i className='bx bxl-facebook-circle'></i></a>
          <a href="https://www.instagram.com/" className="linkInstagram" target='_blank'><i className='bx bxl-instagram'></i></a>
          <a href="https://www.tiktok.com/@matzudentalaesthetics?_t=8pwopCDAWBS&_r=1" className="linkTiktok" target='_blank'><i className='bx bxl-tiktok'></i></a>
          <a href="https://wa.me/+573136643945" className="linkWhatsap" target='_blank'><i className='bx bxl-whatsapp'></i></a>

    </div>
  </div>
  <div className="card-footer text-body-secondary">
  Todos los derechos reservados 2024
  </div>
</div>
    </div>
  )
}

export default Footer
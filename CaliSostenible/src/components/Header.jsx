import React from "react";
import "../styles/header.css";
import logo from "../images/logo.jpg";

function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="contenedorLogo">
                        <img className="logo" src={logo} alt="" />
                        <h3 className="tituloLogo">Cali Pachangero y Sostenible</h3>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link linkNosotros" aria-current="page" href="#">
                                Nosotros
                            </a>
                            <a className="nav-link" href="#">
                                Noticias
                            </a>
                            <a className="nav-link" href="#">
                                Educate
                            </a>
                            <a className="nav-link" href="#">
                                Aporta
                            </a>
                            <a className="nav-link" href="#">
                                Alcance
                            </a>
                            <button className="nav-link botonRegistro">Registro</button>
                        </div>
                    </div>
                    
                </div>
            </nav>
            <hr/>
        </div>
    );
}

export default Header;

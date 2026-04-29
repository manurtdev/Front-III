import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <div className="HeadIzq">
      <a href="#arriba">
        <img id="LogoHeader" src="../Imagenes/LogoOscuro-02.png" alt="Logo" />
      </a>

      <p className="EntreLineas">Librería: <b>Entre Líneas </b></p>
    </div>

    <nav>
      <ul id="MenuInicio">
        <li className="ItemInicio">
          <a>
            <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="10" stroke="#1f1814" strokeWidth="3" fill="none" />

              <line x1="20" y1="20" x2="28" y2="28" stroke="#1f1814" strokeWidth="3" />
            </svg>

          </a>
        </li>

        <li className="ItemInicio">
          <Link to="/"><b>Inicio</b></Link>
        </li>

        <li className="ItemInicio">
          <Link to="/nosotros"><b>Nosotros</b></Link>
        </li>

        <li className="ItemInicio">
          <Link to="/login">
            <svg width="28" height="28" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">


              <circle cx="16" cy="12" r="4" fill="#1f1814" />


              <path d="M10 22c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="#1f1814" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

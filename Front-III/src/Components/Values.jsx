import React from 'react'

export default function Values() {
  return (
    <div>
      <div id="TresValores">

          <div className="contenedorvalores">
            <div className="valores">
              <img className="imgvalor" src="../Imagenes/Check.png" alt="Icóno de fácil acceso"/>
            </div>
            <p className="textovalores">Accesible</p>
          </div>

          <div className="contenedorvalores">
            <div className="valores">
              <img className="imgvalor" src="../Imagenes/Confiable.png" alt="Icóno de confiable"/>
            </div>
            <p className="textovalores">Confiable</p>
          </div>

          <div className="contenedorvalores">
            <div className="valores">
              <img className="imgvalor" src="../Imagenes/Colaborativo.png" alt="Icóno de colaborativo"/>
            </div>
            <p className="textovalores">Colaborativo</p>
          </div>

        </div>
    </div>
  )
}

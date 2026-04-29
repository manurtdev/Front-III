import React from 'react';

const Footer = () => {
  return (
    <footer>
      <link to="index.html">
        <img id="LogoFooter" src="../Imagenes/LogoOscuro-02.png" alt="Logo" />
      </link>

      <p className="EntreLineasFooter">Librería:<b> Entre Líneas </b></p>

      <p className="tituloredes">Obten más información</p>
      <nav id="contenedorredes">
        <div className="cont">
          <link
            to="https://www.google.com/maps?sca_esv=3623eceab8bd4400&sxsrf=AE3TifNOO2nW2JOsaiAChKbEowMWUgN-wQ:1757046567933&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2RpcmVjY2lvbiBjZXNkZTIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDSNoSUABYxhFwAHgBkAEAmAHbAaABwBGqAQYwLjE0LjG4AQPIAQD4AQGYAg-gAvARwgIKECMYyQIY8AUYJ8ICBBAjGCfCAgsQABiABBiKBRiRAsICBRAAGIAEwgILEC4YgAQYxwEY0QPCAgoQABiABBiKBRhDwgIFEC4YgATCAgoQIxjwBRjJAhgnwgITEC4YgAQYigUYQxjJAxjHARjRA8ICCxAAGIAEGIoFGJIDwgIiEC4YgAQYigUYQxjJAxjHARjRAxiXBRjcBBjeBBjgBNgBAcICEBAuGIAEGIoFGEMYxwEY0QPCAg4QLhiABBjLARjHARjRA8ICHxAuGIAEGIoFGEMYxwEY0QMYlwUY3AQY3gQY4ATYAQHCAgUQABjvBZgDAOIDBRIBMSBAugYGCAEQARgUkgcGMC4xNC4xoAeRd7IHBjAuMTQuMbgH8BHCBwYwLjExLjTIByo&um=1&ie=UTF-8&fb=1&gl=co&sa=X&geocode=KaPPM9hZKESOMX93RxXJpfyj&daddr=Carrera+42+%2348-20+Edificio+Cesde,+Medell%C3%ADn,+Antioquia">
            <img src="../Imagenes/SITE.png" alt="Punto físico" className="red" />
          </link>
          <p className="infored">Carrera 42 #48-20<br /> Medellín, Antioquia</p>
        </div>

        <div className="cont">
          <link to="https://web.whatsapp.com/">
            <img src="../Imagenes/WPP.png" alt="Punto físico" className="red" />
          </link>
          <p className="infored">314 6247507</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
import React from 'react';

const MasBuscados = () => {
  const books = [
    {
      title: "Manual de tipografía",
      author: "John Kane",
      school: "Industrias Creativas",
      image: "/Imagenes/ManualTipografia.jpg"
    },
    {
      title: "La cocina de tu vida",
      author: "Karlos Arguiñano",
      school: "Gastronomía y Turismo",
      image: "/Imagenes/LaCocinaDeTuVida.jpg"
    },
    {
      title: "Tratado de fisiología médica",
      author: "John E. Hall<br>Michael E. Hall",
      school: "Salud y Cuidado",
      image: "/Imagenes/FisiologiaMedica.jpg"
    },
    {
      title: "Código limpio",
      author: "Robert C. Martin",
      school: "Nuevas Tecnologías",
      image: "/Imagenes/CodigoLimpio.jpg"
    }
  ];

  return (
    <div id="masbuscados">
      <div className="conttitulo">
        <p className="titulomasbuscados">Los más buscados</p>
      </div>
      {books.map((book, index) => (
        <div key={index} className="contenedorlibro">
          <div className="info">
            <div className="contenedorimg">
              <img src={book.image} alt="Libro" className="imglibro" />
            </div>
            <p className="titulolibro">{book.title}</p>
            <p className="autor" dangerouslySetInnerHTML={{ __html: book.author }} />
            <p className="escuelalibro">{book.school}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasBuscados;
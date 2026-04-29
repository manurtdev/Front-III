import React from 'react';

const Schools = () => {
  const schools = [
    {
      name: "Escuela del Agro",
      description: "Formación en procesos agrícolas, agroindustria y sostenibilidad rural."
    },
    {
      name: "Escuela de Gastronomía y Turismo",
      description: "Programas en cocina, mesa y bar, gestión hotelera y experiencias turísticas."
    },
    {
      name: "Escuela de Industrias Creativas",
      description: "Diseño gráfico, multimedia, animación 3D, fotografía digital y más."
    },
    {
      name: "Escuela de Nuevas Tecnologías",
      description: "Desarrollo de software, redes, mantenimiento de computadores y telecomunicaciones."
    },
    {
      name: "Escuela de Salud y Cuidado",
      description: "Formación en áreas de bienestar, cuidado personal y salud comunitaria."
    },
    {
      name: "Escuela de Desarrollo Empresarial",
      description: "Administración, contabilidad, talento humano, mercadeo y logística"
    }
  ];

  return (
    <>
      <div className="tituloescuela">Explora lo que tu escuela tiene por ofrecerte</div>
      <div id="escuelas">
        {schools.map((school, index) => (
          <div key={index} className="contescuelas">
            <div className="tituloescuelas">{school.name}</div>
            <div className="descrescuelas">{school.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Schools;
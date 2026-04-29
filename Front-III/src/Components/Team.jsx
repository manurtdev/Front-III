import React from 'react';

const Team = () => {
  const members = [
    {
      id: 1,
      name: "Mariangel Gutiérrez",
      image: "../Imagenes/Mariangel.png",
      alt: "Imagen Maria"
    },
    {
      id: 2,
      name: "Manuela Rivera",
      image: "../Imagenes/Manuela.png",
      alt: "Imagen Manuela"
    }
  ];

  return (
    <div id="integrantes">
      {members.map((member) => (
        <div key={member.id} className="contenedorImg">
          <img src={member.image} alt={member.alt} className="imgInt" />
          <p className="Int"><b>{member.name}</b></p>
        </div>
      ))}
    </div>
  );
};

export default Team;
const tipoUsuario = "administrador";
const acciones = document.getElementById("accionesEspecificas");

function crearBoton(texto, id, clase = "btn", url = "") {
  const btn = document.createElement("button");
  btn.textContent = texto;
  btn.id = id;
  btn.className = clase;

  
  if (url) {
    btn.addEventListener("click", () => {
      window.location.href = url; 
    });
  }

  return btn;
}

function cargarAccionesPorRol(rol) {
  if (rol === "profesor") {
    acciones.appendChild(crearBoton("Nueva ruta de estudio", "btn-circular"));
    acciones.appendChild(crearBoton("Ver rutas de estudio", "btnVerRutas"));
  }

  if (rol === "bibliotecario") {
    acciones.appendChild(
      crearBoton("Préstamos activos", "btnPrestamosActivos")
    );
    acciones.appendChild(crearBoton("Préstamos en mora", "btnPrestamosMora"));
  }

  if (rol === "administrador") {
    acciones.appendChild(crearBoton("Usuarios", "btnUsuarios", "btn", "../HTML/CRUD/usuarioscrud.html"));
acciones.appendChild(crearBoton("Roles", "btnRoles", "btn", "../HTML/CRUD/roles.html"));
acciones.appendChild(crearBoton("Escuelas", "btnEscuelas", "btn", "../HTML/CRUD/escuelas.html"));
acciones.appendChild(crearBoton("Libros", "btnLibros", "btn", "../HTML/CRUD/libros.html"));
acciones.appendChild(crearBoton("Géneros", "btnGeneros", "btn", "../HTML/CRUD/generos.html"));
  }
}

cargarAccionesPorRol(tipoUsuario);

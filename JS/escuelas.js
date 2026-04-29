// ---------- Funciones para ESCUELAS -----------

const formEscuelas = document.getElementById("form-escuelas");
const listaEscuelas = document.getElementById("lista-escuelas");
const escuelaIdInput = document.getElementById("escuela-id");
const escuelaNombreInput = document.getElementById("escuela-nombre");

// LEER
function cargarEscuelas() {
  const escuelas = JSON.parse(localStorage.getItem('escuelas')) || [];
  listaEscuelas.innerHTML = ""; // Limpiar lista
  escuelas.forEach((escuela) => {
    const item = document.createElement("div");
    item.innerHTML = `
            <span><strong>${escuela.nombre}</strong> </span>
            <div>
                <button onclick="editarEscuela(${escuela.idEscuela}, '${escuela.nombre.replace(/'/g, "\\'")}')">Editar</button>
                <button onclick="eliminarEscuela(${escuela.idEscuela})">Eliminar</button>
            </div>`;
    listaEscuelas.appendChild(item);
  });
}

// Preparar para ACTUALIZAR
function editarEscuela(id, nombre) {
  escuelaIdInput.value = id;
  escuelaNombreInput.value = nombre;
}

// BORRAR
function eliminarEscuela(id) {
  if (!confirm("¿Estás seguro?")) return;
  const escuelas = JSON.parse(localStorage.getItem('escuelas')) || [];
  const updated = escuelas.filter(e => e.idEscuela != id);
  localStorage.setItem('escuelas', JSON.stringify(updated));
  cargarEscuelas();
}

// CREAR y ACTUALIZAR
formEscuelas.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = escuelaIdInput.value;

  const escuelaData = {
    nombre: escuelaNombreInput.value,
  };

  const escuelas = JSON.parse(localStorage.getItem('escuelas')) || [];

  if (id) {
    // update
    const index = escuelas.findIndex(e => e.idEscuela == id);
    if (index !== -1) {
      escuelas[index] = { ...escuelas[index], ...escuelaData, idEscuela: parseInt(id) };
    }
  } else {
    // create
    const newId = escuelas.length > 0 ? Math.max(...escuelas.map(e => e.idEscuela)) + 1 : 1;
    escuelaData.idEscuela = newId;
    escuelas.push(escuelaData);
  }

  localStorage.setItem('escuelas', JSON.stringify(escuelas));
  cargarEscuelas();
  limpiarFormulario("form-escuelas");
});

function limpiarFormulario(formId) {
  document.getElementById(formId).reset();
  document.getElementById(`${formId.split("-")[1]}-id`).value = "";
}

// Carga inicial
document.addEventListener("DOMContentLoaded", () => {
  cargarEscuelas();
});

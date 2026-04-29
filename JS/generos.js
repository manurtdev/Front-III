// ---------- Funciones para GENEROS -----------

const formGeneros = document.getElementById("form-generos");
const listaGeneros = document.getElementById("lista-generos");
const generoIdInput = document.getElementById("genero-id");
const generoNombreInput = document.getElementById("genero-nombre");

// LEER
function cargarGeneros() {
  const generos = JSON.parse(localStorage.getItem('generos')) || [];
  listaGeneros.innerHTML = ""; // Limpiar lista

  generos.forEach((genero) => {
    const item = document.createElement("div");
    item.innerHTML = `
            <span><strong>${genero.nombre}</strong></span>
            <div>
                <button onclick="editarGenero(${genero.idGenero}, '${genero.nombre.replace(/'/g, "\\'")}')">Editar</button>
                <button onclick="eliminarGenero(${genero.idGenero})">Eliminar</button>
            </div>`;
    listaGeneros.appendChild(item);
  });
}

// Preparar para ACTUALIZAR
function editarGenero(id, nombre) {
  generoIdInput.value = id;
  generoNombreInput.value = nombre;
}

// BORRAR
function eliminarGenero(id) {
  if (!confirm("¿Estás seguro?")) return;
  const generos = JSON.parse(localStorage.getItem('generos')) || [];
  const updated = generos.filter(g => g.idGenero != id);
  localStorage.setItem('generos', JSON.stringify(updated));
  cargarGeneros();
}

// CREAR y ACTUALIZAR
formGeneros.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = generoIdInput.value;

  const generoData = {
    nombre: generoNombreInput.value,
  };

  const generos = JSON.parse(localStorage.getItem('generos')) || [];

  if (id) {
    // update
    const index = generos.findIndex(g => g.idGenero == id);
    if (index !== -1) {
      generos[index] = { ...generos[index], ...generoData, idGenero: parseInt(id) };
    }
  } else {
    // create
    const newId = generos.length > 0 ? Math.max(...generos.map(g => g.idGenero)) + 1 : 1;
    generoData.idGenero = newId;
    generos.push(generoData);
  }

  localStorage.setItem('generos', JSON.stringify(generos));
  cargarGeneros();
  limpiarFormulario("form-generos");
});

function limpiarFormulario(formId) {
  document.getElementById(formId).reset();
  document.getElementById(`${formId.split("-")[1]}-id`).value = "";
}

// Carga inicial
document.addEventListener("DOMContentLoaded", () => {
  cargarGeneros();
});

// ---------- Funciones para LIBROS -----------

const formLibros = document.getElementById("form-libros");
const listaLibros = document.getElementById("lista-libros");
const libroIdInput = document.getElementById("libro-id");
const libroTituloInput = document.getElementById("libro-titulo");
const libroCantidadTotalInput = document.getElementById("libro-cantidad-total");
const libroCantidadDisponibleInput = document.getElementById(
  "libro-cantidad-disponible"
);
const libroGeneroInput = document.getElementById("libro-genero");

// LEER
function cargarLibros() {
  const libros = JSON.parse(localStorage.getItem('libros')) || [];
  listaLibros.innerHTML = ""; // Limpiar lista

  libros.forEach((libro) => {
    const item = document.createElement("div");
    item.innerHTML = `
            <span>
                <strong>${libro.tituloLibro}</strong><br>
                Total: ${libro.cantidadTotal} | Disponible: ${libro.cantidadDisponible} | Género: ${libro.idGenero}
            </span>
            <div>
                <button onclick="editarLibro(${libro.idLibro}, '${libro.tituloLibro.replace(/'/g, "\\'")}', ${libro.cantidadTotal}, ${libro.cantidadDisponible}, ${libro.idGenero})">Editar</button>
                <button onclick="eliminarLibro(${libro.idLibro})">Eliminar</button>
            </div>`;
    listaLibros.appendChild(item);
  });
}

// Preparar para ACTUALIZAR
function editarLibro(id, titulo, total, disponible, idGenero) {
  libroIdInput.value = id;
  libroTituloInput.value = titulo;
  libroCantidadTotalInput.value = total;
  libroCantidadDisponibleInput.value = disponible;
  libroGeneroInput.value = idGenero;
}

// BORRAR
function eliminarLibro(id) {
  if (!confirm("¿Estás seguro?")) return;
  const libros = JSON.parse(localStorage.getItem('libros')) || [];
  const updated = libros.filter(l => l.idLibro != id);
  localStorage.setItem('libros', JSON.stringify(updated));
  cargarLibros();
}

// CREAR y ACTUALIZAR
formLibros.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = libroIdInput.value;

  const libroData = {
    tituloLibro: libroTituloInput.value,
    cantidadTotal: parseInt(libroCantidadTotalInput.value),
    cantidadDisponible: parseInt(libroCantidadDisponibleInput.value),
    idGenero: parseInt(libroGeneroInput.value),
  };

  const libros = JSON.parse(localStorage.getItem('libros')) || [];

  if (id) {
    // update
    const index = libros.findIndex(l => l.idLibro == id);
    if (index !== -1) {
      libros[index] = { ...libros[index], ...libroData, idLibro: parseInt(id) };
    }
  } else {
    // create
    const newId = libros.length > 0 ? Math.max(...libros.map(l => l.idLibro)) + 1 : 1;
    libroData.idLibro = newId;
    libros.push(libroData);
  }

  localStorage.setItem('libros', JSON.stringify(libros));
  cargarLibros();
  limpiarFormulario("form-libros");
});

function limpiarFormulario(formId) {
  document.getElementById(formId).reset();
  document.getElementById(`${formId.split("-")[1]}-id`).value = "";
}

// Carga inicial
document.addEventListener("DOMContentLoaded", () => {
  cargarLibros();
});

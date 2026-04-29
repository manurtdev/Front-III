// ---------- Funciones para PRESTAMOS -----------

const formPrestamos = document.getElementById("form-prestamos");
const listaPrestamos = document.getElementById("lista-prestamos");
const prestamoIdInput = document.getElementById("prestamo-id");
const prestamoUsuarioInput = document.getElementById("prestamo-usuario");
const prestamoLibroInput = document.getElementById("prestamo-libro");
const prestamoFechaInput = document.getElementById("prestamo-fecha");
const prestamoFechaEsperadaInput = document.getElementById(
  "prestamo-fecha-esperada"
);
const prestamoFechaRealInput = document.getElementById("prestamo-fecha-real");
const prestamoEstadoInput = document.getElementById("prestamo-estado");

// LEER
function cargarPrestamos() {
  const prestamos = JSON.parse(localStorage.getItem('prestamos')) || [];
  listaPrestamos.innerHTML = ""; // Limpiar lista

  prestamos.forEach((prestamo) => {
    const item = document.createElement("div");
    item.innerHTML = `
            <span>
                <strong>ID ${prestamo.idPrestamo}</strong><br>
                Usuario: ${prestamo.idUsuario} | Libro: ${prestamo.idLibro}<br>
                Fecha Préstamo: ${prestamo.fechaPrestamo}<br>
                Devolución Esperada: ${prestamo.fechaDevolucionEsperada}<br>
                Devolución Real: ${
                  prestamo.fechaDevolucionReal || "Pendiente"
                }<br>
                Estado: ${prestamo.estadoPrestamo}
            </span>
            <div>
                <button onclick="editarPrestamo(${prestamo.idPrestamo}, ${
      prestamo.idUsuario
    }, ${prestamo.idLibro}, '${prestamo.fechaPrestamo.replace(/'/g, "\\'")}', '${
      prestamo.fechaDevolucionEsperada
    }', '${prestamo.fechaDevolucionReal || ""}', '${
      prestamo.estadoPrestamo.replace(/'/g, "\\'")
    }')">Editar</button>
                <button onclick="eliminarPrestamo(${
                  prestamo.idPrestamo
                })">Eliminar</button>
            </div>`;
    listaPrestamos.appendChild(item);
  });
}

// Preparar para ACTUALIZAR
function editarPrestamo(
  id,
  idUsuario,
  idLibro,
  fechaPrestamo,
  fechaEsperada,
  fechaReal,
  estado
) {
  prestamoIdInput.value = id;
  prestamoUsuarioInput.value = idUsuario;
  prestamoLibroInput.value = idLibro;
  prestamoFechaInput.value = fechaPrestamo;
  prestamoFechaEsperadaInput.value = fechaEsperada;
  prestamoFechaRealInput.value = fechaReal;
  prestamoEstadoInput.value = estado;
}

// BORRAR
function eliminarPrestamo(id) {
  if (!confirm("¿Estás seguro?")) return;
  const prestamos = JSON.parse(localStorage.getItem('prestamos')) || [];
  const updated = prestamos.filter(p => p.idPrestamo != id);
  localStorage.setItem('prestamos', JSON.stringify(updated));
  cargarPrestamos();
}

// CREAR y ACTUALIZAR
formPrestamos.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = prestamoIdInput.value;

  const prestamoData = {
    idUsuario: parseInt(prestamoUsuarioInput.value),
    idLibro: parseInt(prestamoLibroInput.value),
    fechaPrestamo: prestamoFechaInput.value,
    fechaDevolucionEsperada: prestamoFechaEsperadaInput.value,
    fechaDevolucionReal: prestamoFechaRealInput.value || null,
    estadoPrestamo: prestamoEstadoInput.value,
  };

  const prestamos = JSON.parse(localStorage.getItem('prestamos')) || [];

  if (id) {
    // update
    const index = prestamos.findIndex(p => p.idPrestamo == id);
    if (index !== -1) {
      prestamos[index] = { ...prestamos[index], ...prestamoData, idPrestamo: parseInt(id) };
    }
  } else {
    // create
    const newId = prestamos.length > 0 ? Math.max(...prestamos.map(p => p.idPrestamo)) + 1 : 1;
    prestamoData.idPrestamo = newId;
    prestamos.push(prestamoData);
  }

  localStorage.setItem('prestamos', JSON.stringify(prestamos));
  cargarPrestamos();
  limpiarFormulario("form-prestamos");
});

function limpiarFormulario(formId) {
  document.getElementById(formId).reset();
  document.getElementById(`${formId.split("-")[1]}-id`).value = "";
}

// Carga inicial
document.addEventListener("DOMContentLoaded", () => {
  cargarPrestamos();
});

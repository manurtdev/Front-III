// ---------- Funciones para ROLES -----------

const formRoles = document.getElementById("form-roles");
const listaRoles = document.getElementById("lista-roles");
const rolIdInput = document.getElementById("rol-id");
const rolNombreInput = document.getElementById("rol-nombre");

// LEER
function cargarRoles() {
  const roles = JSON.parse(localStorage.getItem('roles')) || [];
  listaRoles.innerHTML = ""; // Limpiar lista
  roles.forEach((rol) => {
    const item = document.createElement("div");
    item.innerHTML = `
            <span><strong>${rol.nombreRol}</strong> </span>
            <div>
                <button onclick="editarRol(${rol.idRol}, '${rol.nombreRol.replace(/'/g, "\\'")}')">Editar</button>
                <button onclick="eliminarRol(${rol.idRol})">Eliminar</button>
            </div>`;
    listaRoles.appendChild(item);
  });
}

// Preparar para ACTUALIZAR
function editarRol(id, nombre) {
  rolIdInput.value = id;
  rolNombreInput.value = nombre;
}

// BORRAR
function eliminarRol(id) {
  if (!confirm("¿Estás seguro?")) return;
  const roles = JSON.parse(localStorage.getItem('roles')) || [];
  const updated = roles.filter(r => r.idRol != id);
  localStorage.setItem('roles', JSON.stringify(updated));
  cargarRoles();
}

// CREAR y ACTUALIZAR
formRoles.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = rolIdInput.value;

  const rolData = {
    nombreRol: rolNombreInput.value,
  };

  const roles = JSON.parse(localStorage.getItem('roles')) || [];

  if (id) {
    // update
    const index = roles.findIndex(r => r.idRol == id);
    if (index !== -1) {
      roles[index] = { ...roles[index], ...rolData, idRol: parseInt(id) };
    }
  } else {
    // create
    const newId = roles.length > 0 ? Math.max(...roles.map(r => r.idRol)) + 1 : 1;
    rolData.idRol = newId;
    roles.push(rolData);
  }

  localStorage.setItem('roles', JSON.stringify(roles));
  cargarRoles();
  limpiarFormulario("form-roles");
});

function limpiarFormulario(formId) {
  document.getElementById(formId).reset();
  document.getElementById(`${formId.split("-")[1]}-id`).value = "";
}

// Carga inicial
document.addEventListener("DOMContentLoaded", () => {
  cargarRoles();
});

// ---------- Funciones para USUARIOS -----------

const formUsuarios = document.getElementById("form-usuarios");
const listaUsuarios = document.getElementById("lista-usuarios");
const usuarioIdInput = document.getElementById("usuario-id");
const usuarioNombreInput = document.getElementById("usuario-nombre");
const usuarioTelefonoInput = document.getElementById("usuario-telefono");
const usuarioEmailInput = document.getElementById("usuario-email");
const usuarioEscuelaInput = document.getElementById("usuario-escuela");
const usuarioRolInput = document.getElementById("usuario-rol");

// LEER
function cargarUsuarios() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  listaUsuarios.innerHTML = ""; // Limpiar lista

  usuarios.forEach((usuario) => {
    const item = document.createElement("div");
    item.innerHTML = `
            <span>
                <strong>${usuario.nombre}</strong> - ${usuario.email} - ${usuario.telefono}
                <br>Escuela: ${usuario.idEscuela} | Rol: ${usuario.idRol}
            </span>
            <div>
                <button onclick="editarUsuario(${usuario.idUsuario}, '${usuario.nombre.replace(/'/g, "\\'")}', '${usuario.telefono.replace(/'/g, "\\'")}', '${usuario.email.replace(/'/g, "\\'")}', ${usuario.idEscuela}, ${usuario.idRol})">Editar</button>
                <button onclick="eliminarUsuario(${usuario.idUsuario})">Eliminar</button>
            </div>`;
    listaUsuarios.appendChild(item);
  });
}

// Preparar para ACTUALIZAR
function editarUsuario(id, nombre, telefono, email, idEscuela, idRol) {
  usuarioIdInput.value = id+"*";
  usuarioNombreInput.value = nombre;
  usuarioTelefonoInput.value = telefono;
  usuarioEmailInput.value = email;
  usuarioEscuelaInput.value = idEscuela;
  usuarioRolInput.value = idRol;
}

// BORRAR
function eliminarUsuario(id) {
  if (!confirm("¿Estás seguro?")) return;
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const updated = usuarios.filter(u => u.idUsuario != id);
  localStorage.setItem('usuarios', JSON.stringify(updated));
  cargarUsuarios();
}

// CREAR y ACTUALIZAR
formUsuarios.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = usuarioIdInput.value;

  const usuarioData = {
    nombre: usuarioNombreInput.value,
    telefono: usuarioTelefonoInput.value,
    email: usuarioEmailInput.value,
    idEscuela: parseInt(usuarioEscuelaInput.value),
    idRol: parseInt(usuarioRolInput.value),
  };

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  if (id.includes("*")) {
    // update
    const realId = parseInt(id);
    const index = usuarios.findIndex(u => u.idUsuario == realId);
    if (index !== -1) {
      usuarios[index] = { ...usuarios[index], ...usuarioData, idUsuario: realId };
    }
  } else {
    // create
    const newId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.idUsuario)) + 1 : 1;
    usuarioData.idUsuario = newId;
    usuarios.push(usuarioData);
  }

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  cargarUsuarios();
  limpiarFormulario("form-usuarios");
});

function limpiarFormulario(formId) {
  document.getElementById(formId).reset();
  document.getElementById(`${formId.split("-")[1]}-id`).value = "";
}

function cargarEscuelasYRoles() {
  // Cargar escuelas
  const escuelas = JSON.parse(localStorage.getItem('escuelas')) || [];
  const escuelaSelect = document.getElementById("usuario-escuela");
  escuelas.forEach((escuela) => {
    const option = document.createElement("option");
    option.value = escuela.idEscuela;
    option.textContent = escuela.nombre;
    escuelaSelect.appendChild(option);
  });
  // Cargar roles
  const roles = JSON.parse(localStorage.getItem('roles')) || [];
  const rolSelect = document.getElementById("usuario-rol");
  roles.forEach((rol) => {
    const option = document.createElement("option");
    option.value = rol.idRol;
    option.textContent = rol.nombreRol;
    rolSelect.appendChild(option);
  });
}

// Carga inicial
document.addEventListener("DOMContentLoaded", () => {
  cargarUsuarios();
  cargarEscuelasYRoles();
});

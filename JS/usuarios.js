//PARA AGREGAR EL BOTON A CADA LIBRO
//Selecciona todos los elementos de la clase y los recorre para agregar el boton 
document.querySelectorAll('.contenedorlibro').forEach(libro => {
  if (libro.querySelector('.btnAgregar')) return; 

  const titulo = libro.querySelector('.titulolibro').textContent.trim();
  const autor = libro.querySelector('.autor').textContent.trim();
  const img = libro.querySelector('.imglibro').src;

  //se crea el boton y se le asigna la clase .btnAgregar
  const btn = document.createElement('button');
  btn.textContent = '+';
  btn.classList.add('btnAgregar');

  //Se agrega el evento de click al objeto para agregar al carrrito y el boton adquiere funcionalidad
  btn.addEventListener('click', () => agregarAlCarrito({ titulo, autor, img }));
  libro.appendChild(btn);
});


 
//MANEJO DE LOCAL STORAGE 

//seleccionamos el carrito guardado como texto en el localStorage y lo convertimos en un objeto para usarlo
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

//se guarda el carrito en el localStorage para no perder la información
function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

//agregamos al carrito los libros que el usuario seleccione, si ya existe se incrementa de a 1 y si no existe se enlista el libro al final 
function agregarAlCarrito(libro) {
  const carrito = obtenerCarrito();
  const existente = carrito.find(item => item.titulo === libro.titulo);

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...libro, cantidad: 1 });
  }

  guardarCarrito(carrito);
  mostrarCarrito();
}


function actualizarCantidad(index, cambio) {
  const carrito = obtenerCarrito();
  carrito[index].cantidad += cambio;
  if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
  guardarCarrito(carrito);
  mostrarCarrito();
}

function eliminarLibro(index) {
  const carrito = obtenerCarrito();
  carrito.splice(index, 1);
  guardarCarrito(carrito);
  mostrarCarrito();
}

function mostrarCarrito() {
  const contenedor = document.getElementById('contenidoCarrito');
  contenedor.innerHTML = '<h2 class="titulo-prestamo">Préstamo</h2>';

  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    contenedor.innerHTML += '<p class= "aviso">No has seleccionado elementos.</p>';
    return;
  }

  carrito.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('itemCarrito');
    div.innerHTML = `
      <img src="${item.img}" style="height:60px; border-radius:6px; margin-right:10px;">
      <div>
        <p><b>${item.titulo}</b> - ${item.autor}</p>
        <p>Cantidad: ${item.cantidad}</p>
      </div>
       <div>
    <button class="boton-cantidad" onclick="actualizarCantidad(${index}, 1)">+</button>
    <button class="boton-cantidad" onclick="actualizarCantidad(${index}, -1)">-</button>
    <button class="boton-cantidad" onclick="eliminarLibro(${index})">Eliminar</button>
  </div>
    `;
    contenedor.appendChild(div);
  });
}

// 4. Mostrar el modal al hacer clic en el div "carrito"
const modal = document.getElementById('modalCarrito');
const disparador = document.getElementById('carrito'); // Este es el <div>CARRITO</div>
const btnCerrar = document.querySelector('.cerrarModal');

disparador.addEventListener('click', () => {
  mostrarCarrito(); // Actualiza contenido antes de mostrar
  modal.style.display = 'block';
});

btnCerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

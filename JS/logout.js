const validarUsuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')) || false;

if(!validarUsuarioLogueado){
    window.location.href = 'login.html';
}

const btnLogout = document.getElementById('logout');

btnLogout.addEventListener('click',()=>{
    alert('Saliendo del sistema');
    window.location.href = 'login.html';
})
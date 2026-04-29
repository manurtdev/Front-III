const formularioLogin = document.getElementById('loginForm');

formularioLogin.addEventListener('submit',(e)=>{
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const validarUsuario = Usuarios.find(usuario => usuario.email === email && usuario.password === password);

    if(!validarUsuario){
        alert('Usuario y/o contraseña invalida');
    }else{
        alert(`Bienvenido al sistema señ@r ${validarUsuario.nombre}`);
        localStorage.setItem('usuarioLogueado',JSON.stringify(validarUsuario));
        window.location.href = 'usuarios.html';
    }
    
});
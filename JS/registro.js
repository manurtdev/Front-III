const formularioRegistro = document.getElementById('signupForm');
 
formularioRegistro.addEventListener('submit', (e) =>{
    e.preventDefault;

    const nombre =  document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // vamos a crear un objeto para almacenar los usuarios que se registren 

    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


    const validarMail = Usuarios.find(usuario => usuario.email === email);

    if(validarMail){
        alert('Este usuario ya se encuentra registrado');
    }else{
        Usuarios.push({nombre:nombre,email:email,password:password});
        localStorage.setItem('usuarios',JSON.stringify(Usuarios));
        alert('Usuario registrado con exito');
        window.location.href ='login.html';
    }

});

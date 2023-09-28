
var formulario = document.getElementById("form-login");

function acceso(){
    Swal.fire({
        title:'Bienvenido',
        text: 'Ingreso correctamente',
        icon:'success'
    });
}


function error(){
    Swal.fire({
        icon: 'error',
        title: 'Error en la validacion',
        text: 'Las contraseñas no coiciden!'
      })
}

function contraseñas(){
    Swal.fire({
        icon:'warning',
        title: "Error",
        text:"La contraseña deben de ser mayor de 8 caracteres"
    })
}

function validar(event){
    event.preventDefault();
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;


    if(usuario=="" || pass=="" ){
        Swal.fire({
            icon:'info',
            title:'Alerta',
            text:'Ningun campo puede estar vacio'
        })
    }else{
        if(pass.length>=8){
            acceso();
        }else{
            contraseñas();
        }
    }
}

formulario.addEventListener("submit",validar);

